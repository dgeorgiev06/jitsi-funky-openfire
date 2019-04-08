export function configOverrides () {
  return {
    hosts: {
      bridge: 'jitsi-videobridge.localhost',
      domain: 'localhost',
      focus: 'focus.localhost',
      muc: 'conference.localhost'
    },
    bosh: '//192.168.1.5:7070/http-bind',
  }
}
