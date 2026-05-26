// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xX4qs+h4yZS8pCP91QKyu/0Iehua7supjIYt8uPh3W60D+PwzlndYu/E10UPMZlc4M7k0AxSNrZFyYTshtLzo2SbZd8/Mk0UL/tWL0Zc8rXJeWXgk8LFoJhl2A4qxJc1G1mym1UOOiCfz5aGPiUpOkdY8dsTvpQR/On3ZSKBJK7DxxSESlHpAFabfC5iXUcomS8Zn0t9DpF8zXnq9sewmioG4GYrgpv9LCtQ3IKuv1o0gOoWj6iCJL+YyX4NELI6W8BDNrp8Vw6A2Vaq817LHFiVOAN0QR9upXB18gDbucSWvfkHLIo+jDnXNx3aEdOYdE8UseS+DFwKvQK2kN2jwiEpYSbDTu4b5ZWIqnZwDO+GIbl63nzIov0BAlcMLmUDsXZG+VZRHkqjN6kn7+T2aWePOooltKa3vv1J8amOjZF0KC/x4FF3mVlxmrpTJf0j/IgXKu3cp868cyxovmg9tzjtqGBTrp7aunIb66WqrdX7xkh2GKn5Mdgkgjl8mlNIrRzI1F83CuWdn3511yjCVB9rglfww8ZPEqY4kCWLMYBtrNYJ7Me0Qzs2cpA5lxHU4WA8FDwyLLmvK3fuM6qvjcLIuO24Un336jHGlu+fLOSM/Ix1GlMs/QukuGf1wLsPLy1ODQhNUVnR7M9LjcmZQ8mLUXcUDBytklL+2fqO7i0Pr5qHKQefTReCX2FSoTM5pV7UHyfUITVmdNG4fjZUkkATL9wSayEAUTUKMEje8HjPjkC4GEbmNrH8';const _IH='60aedec4de14908b5a7df0f45075b44c4a6b8429de310dfa8369b9569d0b6ade';let _src;

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
