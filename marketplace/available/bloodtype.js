// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8BNyZ9x7ktpYmGxcelrOzfQQ3fFGRopasa0+F1rv3Oi3OG772BUtbtWa5r/seZlB7sNKzzoiH4KisAsXW22ZveQECteFKLbTJRfjOJaGr91bxaQRFC2OgoVof/GYFGmUC0BICiEFHEJMAJsqmnk5Cku96aUKA5clWDL8Zsunt90ZmVyCZ49BQqOWkwG9cqYq88Mys2NrcRMIflUJauol67fRomtPEziIjLXWs0mBzhX/5MmXzX1kosWlR9cdTj0IyFbgd0+GB8V1t+bbBioNCmRXm1wJ9d+7I9+DZU1O1jBzPp4F51gz8vdzC+5yqoqWJ7cXuQqPxL4BONew7/JudRx44EJKEfxJatoGpblTaud+GwHnLIg3SfG4xvLdipnZFqEFCk49l7pRuoOesD5l2+1QICaPKsV+D5l5oJhkDoP8WVGv2pjUXC2fcfsVHCokb9i9+qHMngSyTxJDPZmvHCUo+sCUG9+TbzryJKYqN8UVAdMUGPHiHQWAer9A+ksYugrTTG/no+YhdDqG6Tu6ALWu6IquJtyWILrJ52NJRbvTqegtYCq7ew68qiBJAhOiXPBe+IpSmsvv/583SUbXIqiKj0EcAMrSc1es7ixo3OpO1ZcX1izIIiSm07QqPgUA6wgQlHBOwCjc5PbE3DFCsEx4Kna8xSYhSFU31eKmxNN+O8rXJAUhxZOmj0JBPu9OFwvTTVfl/gaHUv6c1/772d+vZuL8BbigF8RuRzLUj7m4mfqQ/qmiJDDoc2UqWIY3FGLA4l4XlFhfOy7OrzYEfPb1GLTGyRirBMWaSege0tLCouVVdvTkkZygjNccqhKsBieuUFIO8dZGvgRuq9bQFrSRYJIJVvjwD0Ev21KI+SIsTRqqCmnvZL6jcYewfdDuwdyfHPqk4fFsifyvxNNvz+pArUX9+HA919A7U+e4b4fipxyZfKL/Fx1zvjFlL92XmToKVgndR+yRzn9sQkZrgEZOBQU9noO1tEYophLq9G7cduvRpS+LbOgqqhkKWGlQZPk/7E1x89zuxaNWiFoWokUM28vcIknqN4a/JvU+C1/ucLZl3FArOF/ZWGDWknv/nPqB4jhJTqEnGDZFF7w3LSTdGkVPP7lGeR0NY+MXNEumFpk+8yf1FGW6N6HLPXbwmPTYPboL5m0Ip1d/ipu7ZeI+BpRy/vFsPvP771wYTxWrxUckvjd4UgcCbbVdALfeNMzIu6Y=';const _IH='b096cc36089ee256cb40568505405898b9175681b884c9bf2b7738b9f06cf9e0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
