// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiBRi7sEkflxbzCpodwLqra27MINb8/L+ag61SduoM/YiV51hSza+PtiiSr5I2m9eceCcJwlKTU+nPyRwpku8ImeVPMbKyeuu9ShPBN3JEYmVRRJ67nSqf5gS8Cgzur+hVd+sgmlm6pU6HGVXNdL239yUdCq1RWCZ07srHuHz5lu++yWjHAHJZ1ohIffiEXafZOu4DxHbg43nVM+vIxZATPsU1UU464yZkfp16eqcFw5lT+X1pqQr3kNrzD19KX6IGGjufspFVjGRPEe5uV20ojsin3RSLALpNHcUs3tTzTONB2TmwK0FtmFX8iGeNik1cJCpYX4iaihZ/d3p+2lCKMohL5VCc0KSJwjUeho7tRTGDlZpJD5nCADA4ZruT4GVEmtproaONmVlh8cBBKw3zO4fd7gDu9KRDhTYB8ba6rAXk1F41/dpNE/HNVw6iaNQWFH0u9uXUsGWpNI0XFM1LRwYIlu+Uo1gR6orx/wlO4oZwBIS6DQ2PIYhIqicVS2vcRgwPasNAzovx8LaAA6eMDJ9a27+0ZaQi/pv9vqJ/x5ISjLC1nvbM+QeKwlhGGshw5pJSbDH6nwxB0Yxb6XJmG2goqiXmFdGPvA5bGsgKbrEIAZ8cH7jcKVF/Oq5qaJDi9IsbO740RO+2fBas3kUj9MrGHbuhPhXQ+W/sk3Ts/Ks5iHz6Eya0OzhgpCMukGnKSlql0coPB8JJheDzFyrgmC0wxjFEKjqfUgFGaf0QqNGvtdepLA==';const _IH='472b95bf213f6fd951d9ba7b1144d2cdd63356bea52b1c597d3b1d36d2cd46d4';let _src;

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
