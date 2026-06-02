// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DStcGa8thP9UIQsKAhao/Cd00vHOv3tTscF2QHZbd5YmL0yzR42TfW/ES/bf5DVLXs0W/v3/jQrPvzndD8MLfAEVk+7SuxNu9YZQkD1EWtPtddgAjFYATeDXMa1GnqshYm4ue6sVFJNYIXspDMnRWMnkX0vyzvurnzNU2sw6vw+MmQWpsqzDXpe/k8n69WSJzTd9+5BaHwwJ0kOrWm2A4eq2xOXu5xNfmDm5eKDFat9jv4CLya/FRhBOSnB4ZZuVWiFaDGpAX8uoiIEasu3XFjq8m6Q+AkAkvD4LKcjNCxynHq6UPUiaQi9gprhIanimWuSVKJ7QcJZvJ0OW6LbPpHx/UOOukaUPehwWEXYsBnUq4gFjs2JuCChOk9VZBNIvU7h61YTo35MkE8n0HX0AzgJoGBVVbFcxMFTso3mo4XCml90lq1VlERYqmxnEt8QFXMeKde1HXQXfDpAKqw24fqKC+gLPAza32efhdYaXi1GxO4TGt9j7ktcRbd4XOZy7A3B/GGYyVVSKci5iY18d7DpfLD4CRfkhPQZ3QrJEVcJahoiRPtpZT5GQ4f9Ma9e5yfDxePrK+vofrtgBzcUoRzbIta/1ZvWFkRc03jEkhqIMVfIcR3k4p6Kg1Jq9wNBvWhLdRdE3WKWT2mLPWXZCZBAJrTnWKa0XAxjwDzNR56D5md1Z8xC/vg6zkWzO1NdLpC7gT0Cx/6lIUTWv6ncFqj4OftOSTnq5s+cUZdNaOjArWyQjIft3foH1OjbiTOTtfeEVAQ/CU0c9O34CDCht/VmBgdlzmvjZI/fDRqeIM7qC5owR6hp3Ls2DKBOuCZuhuiO9FxOXGf5MVRqSBXvTLobnyr8N60ZPLjmaiQG0STk6QvvfT7L92Y9nNnONrQSABSxDMguFHYSt711/LcA13a7g0gc57W0j+IlnxQFPYSjP07AwNYOJ4JjX52sXFPiw9Z7tVzvCBLxA/A4K/B0TnLabcmRYm7f2om97qmnlaN2m2rvrRX70nMZkWQXRw97KGVp2G+BXJKif0H7AFcqD18XjGfTEuTe3FooenvObpcCs6L5orDf3IT1uZ7c1All3DbT85WAaN8y/vCWdfRPWYTCeqxgiV/vSDV7Euig+MrHyiTllikPwpagiAAKpji0Acf3TOvqaIvipLjHDs+76JZdsVPt+EtsPw3wKYLB3t015GozXFu3zawZpwnIqSdTGES8a9HLBI4Ks8+JRial5NxTg+8lZ4zoqWdOWX5xjQoV1mYIEW7lX9zJ9JQiRXcbxKzP6RBW95Y37gOP6j3z3oJlqlCcpnV0BBkSX8SszOKY4PjWAAIULzlRvxaIkNS9YBCCUO+vCAbb413y9acYaQpXsUbwUd4LTOA==';const _IH='9b00c93642eafa32387d197923704f7eeddc93abdb48b9e8977d926e7f72977b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
