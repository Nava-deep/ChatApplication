import json
from channels.generic.websocket import AsyncWebsocketConsumer

class Connection(AsyncWebsocketConsumer):
    async def websocket_connect(self, message):
        self.name = 'hello'
        await self.accept()
        await self.channel_layer.group_add(
            self.name,
            self.channel_name
        )
        await self.channel_layer.group_send(
            self.name,
            {
                'type':'send_msg',
                'message':'hello from server'
            }
        )
    
    async def send_msg(self,msg):
        await self.send(json.dumps({"message":msg['message']}))
    
    async def websocket_receive(self, message):
        a = json.loads(message)
        await self.channel_layer.group_send(
            self.name,
            {
                'type':'send_msg',
                'message':a['message']
            }
        )
    
    async def websocket_disconnect(self, message):
        await self.channel_layer.group_discard(self.name,self.channel_name)