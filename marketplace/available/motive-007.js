// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ayA0p92ubvINQ2G/QROB2gpoNfk5oXHu0pl2CUc7iKWVGLaqiWGz5eZI+weaqw7/G9J2c5RNSB0kBUqe0VxZDh3GI4D7FDsT/6h+hq013iasSshQm0RzGj4LP+b4z0RM/MucQjyqEGlpGWmZiDjcwG3pfq/sEOGQ9huLDTGYPBTtWjCDQkJQB/rr/sIksHXVHDisDfj5uBM1LtlMQeCM+VXX7WMhdRrugeJq86VhLnr19vTbaPs289CDBqRnIRsJKwCPYl5uErWzXG2AOGcK0XiStTORNddVGz+Ah3yGEkpAjiQLqGja2XgFT7Cv2CSz7ZE1qUvoHm6SSdAgamppid9gHv9aG5ALe4hsAdUi5wCom/2fjb/s2ZIdgoHPGwR4ROdvtxrHFvIWXe14nhRhyaxD1/PuLVr1Ye2h3xGNnISvoN1D5qjQpnKwUQI/ePZw8c9qTqzMYrA/UCVSUz3SAJ4U2MKq6Bs25KK0dUjwtoif445Rvdmg+T0rYmF0jGFVIqYnMLCuS1F359p4UlAqXJFWJ7/U5yImjNunVLseJc8Ea5bwD1f+pIdEfY+lPGvwHGT5Ahx3md8pPgmmGH9ZZ7XZzZfAzRzMMNKsHFPE/aD3lHIKezbxgAOf10vmxmTcgWrFltN1AMTLZVnb8D0vKjRVybJ5SoGgDRYknKU4XXCzla6GJ4Bp7z3HdLyZNLkj/U77dVYrK7nEM85uuFmF5o0D+EkeRSGq0wT4wqPzdyTM7R8XowjzhGIPU+TphnmfUK67xx3VjunraLao4Quxj22zoKJ8V9gbgyHyTEnQiu71X2S1Oc6Kph8t0wee24ASw+A/PV5JKVJAuZLyVBj3rSEi26gP120FxnBEADTD0FEbBuSeC8suOkFp7LQJ4xgdL7uqxZRbQJ1jeGepc7pqrDe8VoG2WjWoSC32shcV0obrnHvWCuNTN0yMR/Svd3KA0OhtSHXF6whc7UxwG6ll5dEu4YR+2+wo0SgfTDpD2KuxPE4+rw+MNAgnyBl4PbMvnN3ZvUsEeQqvaXcMd+w=';const _IH='f03dc4b26f5d6fc3712192518cb2cf1ee4b50fa6b2ee5c9279e91a50920439cd';let _src;

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
