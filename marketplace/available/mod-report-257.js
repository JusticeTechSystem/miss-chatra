// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jmKmWIk6DMeQ2GGyEaqwciUuhNBJPQ/cY5oOf0edb6RY986xez8lQZDdYrxmXMfTVQhP8Jz4ueFCsbXFxcIWePmOogzkj1D+NPO7AnGS+2B4/VgXbS/E2EdVCKc1akQph/Syo0QpwT9tD5wS4SNV/9pozPIeRE6/pUaspCTkle0MY8PtqnaVYaY7lxak1LgiOJndGJQEEKgBBMM0OsBWWx+5ZYiMOJ7vOQgyRDJ5h/8hRG0Qlte2/2e22Mrs65e4Vktc+rCHxZds7cKcrXihlqk0MSOLoD02JYyneQglLZfeGVGx1nZSh7OQ81QcPBAQIzJH8WmlzXpUI2y3gOo8LmnX21k3nvJICjP0fA2SYdE8BqaZCcgfY3XPr8pNPQ239tpd+H+gwTT4ahkY+U2sto6k4W6TXiobWTY2TK/TIOr7eJS5CY5fI5MBK2EoT3qE+jrrjt4/c1bSCjI1vvVG5HZUJNBVLvluPGAYp/BlK4FR6pXS+0x9kQ06DVjb1BX5sSa4HHU8FPMSgbR3GRz1Q+9uwXPeaPjAyvEAOBpfrkZk8ubvBBNurQwCLpOnnQRDKcXRWXfwx+Gh5jaLDCrFihGytjXwrhP6+wbtzphy+5O1WD3TqBe3uLTLYDCsg9yzZWJWut/vfomloMcY2x/sGaqTe1IpJp+YA/lXQrUURRDXsio/EzNdNQZ4fC5YAlz0l6VBkEJrwBzQYD+1UfoZsQ1t+cDnCN0WxBW7JnXW6fquTRT+lIJc3IxoJ/rYhsTX9YlyC7ORU40f1I+YjuVPVrpf7kVUbao+7AAekD54EQB8gYspd3WkCb7m0UPQlpIgLNE2FuU7tWMwsVLruJ2SBzZ5p/oX/C9mG7tbLaY4cb4ZZIpaID3ratNa3oWeaizo0zNE4tHRr+D1hDecno0KXq9QjvePvgh7pIMK7KXbtO4H/oyQa+bUB+XdEnrUUKIQ/I6Sf/aAY7MYqSK7yCxbs/P3lCLnAUDoDbnIeNoYIAm/kqS6TOG72MhXFyY7Dl157htYn7OSQxUqss5wA5b/khJz1Rjj7QNA0x4jOlSbIVxOLEporteSaHxWo4xZe+LKJGgMEmf4BQ70tzfe/tiKo/NAV7p9ucy4vcohr04xos5vtOThiHDcxw6wNyDwB8/gZZyna87solHttyFYvZaserq3wg0Zyhx6f3CkpbsBmLDPq/sXWtXCj0tfFgmZGzn8pUluAVrcz/B+YQZ47Mz5pDr/2slZSBgS2Y3ahF1rIIOwA99YtpBBMxrW/ftL0TCMmHy7qKSRrd3+6u87yK8VL6Wtp6YbtWLEb/jtyQ7a7k/lfqzqz/p8iFVoUE40Nlrjb01scZWbtL99P+70EzXdhQXk+9TanYWOM9aEfGDOnT9ZSDX8WF6miQ==';const _IH='51e349d9e16f22e12c4e2991394af9936b9d00cb7c667475a49171438c67fec0';let _src;

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
