// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAv2XuiyNLyDFXxMWI5AP0vZHV27eb66eV0G039DMKuuuu847ZxqPvd+nKBXcB5Qj8Dz+C79+p8pUUdblHzZZF5edr1mswhqdhirvhYaLvSknUJmZhxbFN2RLWsHWYCC806UqRLjXu2Fq1Epi/H2Q59Q6DCtKIuzibwrCCGmbudXNLrFFY7D/IvlMEj0mu9ixk7BKB4DfT3/k9Cz2fT2UYn9V7W5RP2mBCtVf24jcDOTZv6uRkWVwO7XPq3m1EjoaYj+DCtKh2FoRsfbHAv/NjlyF1kDckMySLLd+6zx/mYt4i5YpMF9h544c95O0w//nDu2Sf97y5stEtPneHQaXcBqLy0q6xbjm6pKsIgu1lJJT6mqHhLApsMhANQmVgK36f2+TfBkZy43irlHJBn3YOUu82R/K4fUyCNMAJgsMxrFGJeqbDbc9w0bOl0SDjojUXZFrNIwPPS06XNKVoY9l84aEOI9pKuI2/k9GH1KGhQkWQ4daYjDL0rJm6lFwzjrswfXD5GpR0J5vY2Ixk24LKTfGXhTsEPDbRO1/UvmgLZfMTw+1W6jKCJvk+T+62t1sqSg6roIQy0aiibObn/qjvgEmEoJFMZhWjdYSBwtmj4g5MoR6Y9I0Bb5JEsH097fK+BRaGCGZ1abDlqBkNE0cgTWYN83rC5EnkdGIr/hF6S911lpWeYjYtZic3veA3mdMZzYnGFSuqRZ0Jfqb/DmC7GFDRX4m1A2zJWJkOpMbVsvF/dZClD3cUOIBDHoG4Ka+JiwzGHuNqnPk7ezQAzc8g/L7o1kXa1LIbPJpkIHOLQYHhdY/FwGK2jvkVONpBInvdyNnH6IlESVUI+O02THNOQvw1VskuXUR5MBeog1wxTWuuRPPdvGBd4BIeCgCUxhbQ6vqfIPZvxoJzXQsV8SStHHwxK84GEMZWdkO/QaIHdOLKeebEGXZv1aSS07bv0V08MnMeqP0GDePRCa4QhU7m9AxaAkR8oZ8OOtlpxZHtexcnNMgTGnzth7TJOIC3cc/YMtQHUJLoj/0ElQaA6xJeVpX3tecrcznBIcBHW5b5wN2OXq+BwDb7V/HNnoivImb1bxRtOb4Hzbvu8C7BkLHwX7aayHj6EyB1I/lKRNVDd59pnco3ec8LvVqxEJbVLYkC1qzKM1rKDP8qGvnYfmDn+/VNdSREg3T7XrKa0uYXJazxU1TKBLbkfoLiyQe2GhNiuD0Gcr/HYKZN/3NVGDI6aATPWkadUFq0XQJPiSNDEuTk4U9c+NxMYH7Z2e8wd1BBH7TCSYRPG+CZ6xiWUTvAePTqgkPS+IvvDlmZkyTgui01tzlLHzegYadxA2/31FJlvnCCLFU9lw05Lo4Fcmjm5+GP4/wJRbf+xSs2h4k=';const _IH='b0ade995fd92081ad2f1e9f8af3a8374c871683eac6f36842dbbfab3f6320cb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
