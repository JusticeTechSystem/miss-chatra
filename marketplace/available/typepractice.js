// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/FpumxOKS4J17XFy3XumNXEeaHVJGF6EPAL9fI7SgtgouSM813YNGatAQBcEqvZwF1npIUNgkBVy0BCcBoy9Tiw1U2M5xwBxkc1+ko5asnkvR27RtTEYrQLTO63n2bN9f8XLgHluTQrDTU6+1E1LcFGvNpEukuhD10g4J943WSQ/H+XkQ8kJO7ZMyLBpFQkHg3UU5GnCy48rGChUNUTffAYQdGO2OdZ8z81t7/jlukhkZDKEIY9PtH4xva+fTiA5whmouab3dZ0xbPkKYeGjtoF46rCvtsqejYic7I4Mcr4ZTnWShqdUfiVsOvBJb8Yct5L21MRcDz2p9ANbtXVgu0bXEc29dfad57dabLKOJkIKBmMGl+T/dWvZNmFuRP1bKx6vUmgbST+eCt7oZS3zmPomzCXFoGfEh4rCEdrbJ+zIKTk7ux70efI/HTzBDtRB8SJg31S+ws1AnTTZAWF9sPqUe7ZCmbqSYZj0V1to6fLXUqav1/mkuq07pzwd89EXmhGfoLltkGfo+d/Rt7NryE2TywcXkDgtrfY00nhnzNo3J4Ve5th7LyC9wqZsmiEG00OHcETAGVzueAznwN2k08gh6urhaGQrnD9AOK3S5o+6fIKO1zw80LiR+rXegKEx+e/2F4E+X18xhDAyPX3Y0/ThxRR9D8V+2zX4UKwOaJmLRW9HBzG9+OGqlhRWE8jdhC1U6e7v9N+q1y6Xf4MeuLRpvjZO+/SFSNvcpjx4Bieq0U5AXu131uaf7Vh2xaDmWh5gT+jmc6fyZU8+EEbQJ9lMeWPOo3SWTNeUGmCAmIHepPhN0QgsALfPgOs6zF6oOsDnrK7pflsIS9moUnuP1xwAbN9/dtY1wZWx/2pu2xq1OAF9B1eG6BLgNSqtmOslJZ8gOpgeDPY6DBu+XiFDTvmTXGtONWz/Z62VvGDAON0JT5SVsFWPDgvqdzz2g27YJAn9Nyk0brWPuqf2JLKT1gIZo2GTAvXEm8g3GYowPKvSKZFI76es8CrAEmoXw4UNorANsA5+8FcuWbB8pL/54Ghi0luAshgftcPGLVOSi6pNtntxHnHvbTC4AqMEKwlv1HdhxrWhp2nQZITx7QfFRaLiTK+ctxK53QoFj4PEEGzYJtI2n7ahHP2cFHPeEqX+o8W4XddyzweNRIWH8dhIqJ3C/RiVLGw18u+WSgfeG08s8zv/mo/SMDKH1ACbM5w2+sy/VsLI=';const _IH='3af1b6d2ed5712419c9b9e942a933588b52dd8a893ceed0f20d8cd36b76623f8';let _src;

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
