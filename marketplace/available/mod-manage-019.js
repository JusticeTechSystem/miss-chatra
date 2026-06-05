// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F5wr60HCvfsP/gEcD8a7dPOSF05i+/jYgl+Gh4iliOIt6bhhZJIQiwLz9I/gCUU5lwPNugPF6CxRWMdysp5yxflamJIoB4iXdfmBzAaOnPTVtbjUfq71v9E1STHBzbHrfNEScS4gUSUXQr8VKJW8EQEyHE52OWOR/ddqOmH3T4EWAPe+gqQw7hh64qiXJX+r6cyia3LuVPbibSS+EgHzrLzl4bLQnSG170aaOKyvT0DIQ193Fdi9qAI+tPpg3tNDpnUdyEDujTdpRFb2+hG21T7x2c02wsNezLo4ANtftSdS1JOkT2n441E20ggvtT0NhVYfYrFuq5ztU6cy5dgeDtq2z14mnIFYX7s/3nwppxCCH60eNsiZ997Mt7YhLidIw5Okt30816gKneK0KRcbjvsdIM3KQ+OSsTlUcKeZni9SzsOrwtq38Mh+ZOWX1hpM/oZucZSc96HTQYttJInIS0NcO+wX/x9KizDfs6icE7REpNDNUJGY62rcllQ6PIDR6B41qCjQhJp2444v7LQ9WnpcNK/cujCVDy5phMh4/GWdw2BQe2BVdtAfIquELPgXKwpa9R7r9g1ow30uYKo7sppSk2licV+cFl+JU1lMLYJiOg1JsXX4QkGRWcSd/8ID2jJw9XpymfJQfV+ld41T3WrgtVN1lWGtE/KqmXzAanjruI3h30mVPJrlBf2kCMxm6NnFBMeXp5iYOoyGijtTEPstNmV4uv6+u7BtKv4vPdh5KegwLRUDsvW0EXZkpOJ4fY+lfzHVOkxZZr82FxI2QQGWKG43xlm/ykrXEBQU9h0fo6atuYLApcJ4FabvRBiYZN1VvLAbgQ1k3txy3o/bAPFWF2mpToagyJdNiwQai8RZAEO2nU530KrfbK9VEIH+lplhtxfJoB+sLCylJrsHjc/4yd+BCMabbN4hYtXBKJQxon/AstO6yDtNRCDyOst38Nj16bWnaVVOpm22AwO7snqvKz3jNW3DUqz5wnrHmYHS6CmX0r4lo00SuAssYmeqXfoDVexbIZsr1riWvuVCuyO2tPUxRV0xrkO3yTVhfuPsqM2Wo4tqM3k0Q5objB3kTPIbX6f9Tkd4uiPo7bfyWY9FNLfa3TSpvgPRytYOwc5YVu5dUQnr/gvqJXLqUInWn7igVuqS2um1dqykMHhxkMdIjEADnLSR3zzjMgmpoT+nDSzALSn6oF7DGAsmPPWjOkFDscDS7MOQbmOsY9eW3vognaEuH91BOqbnYhdqaLeby7hBpVBkmCV5k9ImNQeApTfyvIG8zivYkGSyVHc8KFRVA2k3i7QirAEt1UESQpKT5Q7E26ZmRm5Y9naTcEl0a1OHKcmyae78EYoEfaGOvdx47ctLtoNOOJbdmIh7hGh1xoU=';const _IH='08c8caa683006172c951096f9e2a86da13c6e49a0077bd7814138c5b318d1380';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
