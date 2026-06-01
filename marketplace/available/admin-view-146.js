// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwXP3CXtQIJ1i6h95kJDf9LJbQ1LhFTR8Bm673rOlxMhbXZEgJnYsWC7xxBU1+WBvqlMIb3uAoHh/dLmPibX+pqpDezH6vOuNZX1H5xcaalheTwJvl6VkSnhUfAaGqa589x5f0iqiLVA6tneCoeA6ykyKCsfdkbZBzcJr8mc8tZKYOcvijWrDbeWnVJXeO4FjnWW6V23w9SubJVTVInDsVAuo4IJIF17XQZQ2OuZy03uxbN0/0cMW/40Eka8eBUd8YT7j/EXPsEEawttRxZKwvMtp/P8X4+6cQyg9mfdthmNhXN2PhOXTwa2PEb+WJO2lRNq4v4kCS12ROP4R20g8rzUVvg7QDBnO6XBWuZZ3TzriD/zLQfrug9KQOjf/y48Nh6b+C+lcneJ+WH4139vRivSv9tRTW2J89wkWFN7sKmc7LFUrSCRj8cPLvyan0rd1POIUJQdTKZBCN9ef0mb7uPrCZZ2jQ4o1cwkoJu/Inl+3xAqp0RZskw6guwVhOxgtbfX3z6oUPtowACA9ftQqlVr5+YpAz+jdytvkcDrgf7+hduELI3y/ku2gPbMsJ0ep+K/pLzZgQ+Kk0JzHMUd8rMoONYjoJfDs4vHHU8Wp+o4zIZS9ylHbeeOAWVQ4sl+OtDF+xx9B0Sf75PrdXN/u3l2hgR6ZnIUzaXRqVQUjrYXfJsoyWvaXuX0fb2L4BPephHGkWOQO4yQRpV4K5sTLpcCgCyqM4W8Imv+Q/KTIohdJgol8azjiDgtO3WkJ07n7oxPO6l6qm30OgFF7VOwueg9b/8dgMxypZ2Oq3AhV6XPfteB1N6qx8cAqkeeX405WMbNNTLaQieeAZynAp9lLzH/VZaFn+zqn2mOoiQ67nur+yMMVBFBsmdgSgPpXC+t2UTjYKjaQsYON/u3GBChS9NS9Y0Uzm6SgUjFSwWejOUAFosIXyXQFz02vUIiYaACsFxPOLNkF/iowawa8n0gtU2qCE5uwibE5npMi40wAoQNFJLb';const _IH='d6bc6625fa9b9f560ff7949bdeead83529a09f4531afd8b9a6865d34d4ba3812';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
