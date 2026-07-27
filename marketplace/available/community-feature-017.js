// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmeCozrlFXAQ7wD3DGTSU1bbSninSWOLa0d3RtU4ElL+BhXvbgyNb4fznr8a2wGmvGUXIc6TOxTgKUTGHzMmfBj7Dgeln4RgzDl9SmxCXBmc0zobs0BMDfzH92CxuvOTYrIarX6FPSORWV/+vzPeJJ+cu46iYhi3f6sc+Do7dn+Mr4B8900zlFHxECyuBghEfuRRJLPa5BHCsa8RspMJkmplvBybKJTWcTVn02zb5NLCpIuyK30Ue3/YxBfdH606DOpYi/9Ya+C915JRB8IpSt83wFlPoYaCWeXYws2AhdsJxHcN8oVoGESFuPluCXZQ4GgI5ckqf8tqDvmW0a0OQWlt1R5S0q0q7SvMfT2QFPsD/0JjQ+oENvDBt9SvTJP0hh6jKUHFEfpTEwxk91sJbrOjRn58xhqBIEusLwVpmiE8MqWyV9nDVF3DmtY1UBHoiai9ag7vVV7ilwNxX2ikWQLRI4gA4EyV5hvqCpGibpHAcQM8W5rzsfItZFcpNL216j37EgRM5WrhW7xCGiwEdJhEP7aHF6Vq/fh+WOcbrN3B2cSjUMZbWJlHIt764F8uXeyZRezrnm25YNbHIi1L1X7MKwZXhWCMI/SDcQM6Fx/5kBtTQmFbtxkvtZZkwLCiJearYPZmjbAs66Kb/HeErEpqeGKTJ9X+se+N/cKQEOVJV8BsEWaoCbq/iUDiQ8sViufBo4CG1ComflWgEIjnP+6AL+zGnLsGljB6RWjAL6';const _IH='cf73cebaf8d60940de734f0700f6ddf72236413b3314d4746ae029d0e404d3f8';let _src;

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
