import request from 'src/service/request'

export function EnviarMensagemMeow (ticketId, data) {
  return request({
    url: `/meow-message/${ticketId}`,
    method: 'post',
    data
  })
}