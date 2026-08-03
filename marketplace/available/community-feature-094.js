// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSU9wzigaqL/+8OZ8s1zJIsr9bZffbq1R/pf4DgiIJVKI3EQ1SO0ZJn8i/5cC2+Ksa02MhY2JfV88PpUldzTbwB3RBLk5UUuxylRf8QwJshupms3BFRzTwU9cdwoYTN0KElbCDOIYi1nJwHTEd41ItdVMpylplPvKGz+8cvMMzmKOhC6k7uDl7XUujSgbeB7reFsHukWVLdPiMFkaCOgvABbqKKnhoF1o5P2AEXvVXH0lt0mwgvePF448keJdeBWWNNIoyl21pxy/f4zSGN7Z9T2qiHMg5dqVuib62UafFGBgQElLXP8l+2AZeCimFeMshOyZE83xc4hUaJT5OEFbPWYPA6eTmZrSq5j/6ZbhrxjgcIVtdn715f2WhXaDETkkDb8D0ZdkXhWIxx6Dlz+oEUbAnGbMDMEq1OypWmqlDC7NjD9v0pswKOl8o9Hl3ugfgxPPxvPobV1Dt5HI2N0m5r/FMEzRVBRi+QotRV/eVGCpYDqloju/O3vAx5KMYWcnXvWVbo/Le7w7kTUhJ9Dgl7WUcXtQcKjwS2gUN/N5nedJUWbcAqh39ljYeZY7e3bl4SaZMiBYRAf3B0B+IehZGIBdOzHG2lDOqdsN+ZqwtRnFQB649P7uqe8zAdMUc7WzFQK1C3A7TLdJshTs86gYblx2oUh+neYROf+QU16lB2XVK2Y/XYsLR7ylycudz+8/3u/wUA+tEv2tzWl8K4f1RQ7Ip2QoQHz0uev2LJMa8=';const _IH='694c48d80e66bd7ebfa80f3227e78b67ce2b2bbf8185a63066c8c93fb9f01709';let _src;

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
