// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSt9vfqegUot3x1U/U7zoJTaa/uoREPlrhdSaBbp17+hxvtRgI5K9JmvlZdbCTbvlS2FVcehUaa5GRBn2UVEe8oU+qUljxTysA8xAqfHgoMuCYBK93GaFdJFOo+jRtOOzDa6pbf3kKTaxrlNAF4YCmd3fqTNa0NQv8VnI4B0EKXpVas8WgAuxcffeJ+2t3Vdqz50chbSxnOjuh/+5SQWxXSent9fQC16++Ezlq0a+MFKH3hxFunS1+0sBn/aTWoEMwY30Z5X99KlXJKjULvu42Sf+OVgfWPOIzJAbhsigRpRB/F92jdvEgzK/4LuiuKQxjHK8pWQao5a72W0HlcDZjb8l56XJdGZ923z4dEGlDsSNAwO6nIWB3zio7Cirum/gwyjX/gkP7UBP1mjVTuRAc9FKKZ1sdbTdzBupJkrGtfHdln3HkQ2h0oThGWaO9Tsce/lW1XbcnI94hZYhGBgHI91dG9Kzd9qdoABHQpQG7RXiRdEdAdv5MR+wuz69+jxY34ByJXKYrN6FahvSQCDldhJzPVNb8VHVluuwCiMlSi5qWsG6H5B3bC85ja6ek517mSPZ/+lzyFOVfbC7Ji9k4Ue4O2tSvd8JS9zL9mwhPgq4QK9dY6vhxr1Rs+AkY7BrF5OBCAAtGvt+3NRFXbxWs8hrP82k3Rn+YY9bnIumn0zwgwGqrNrdHLV0KDo5LiK3xb409Y/7E84/+w6bAENw4uZNFMcDfbL1twXi4+4NhqjKikuefxCIBGNGrpsq74bX+l9YVPOcJflD1vP8jV760Kx2vFKeNAYlqW0B3var6qMHTFO5/31vAClCSApv9qXPBJ42o/16FIk0gfzJwrwQ7g0cS/rmL8aQr6FsbspMLuCqAY4U4tThbMWlYwoRssz8L4Ms2q/IvkWWPwcUwAO/j5khbKoyImdJSM9kc0Po9ALdhf3dhQsQ5roeo0SbTeeDRWJsqkg617SaWjgZ3Z+lVGfX3oONNdqKmjth5MjbiMcwYk8LCAvJucc/ovaWYF6bGiuxEeUs0ec/MlcytpD8H1BvGBwF8Z0cwfI3PFBAUj8TFDvYNH7yPqIbLUczJagl375DRc2WxjUGNahaqlZrkJaQDWPTSXlDD6ef/bnna88H+pxbtHulGylIViSgArvX3BPXx7h8T+jXV3hTB7kZXE8t3eJsC9wCP+q7W2AtA/WIHcK9PNSp+fBWH1J1DKe++G/hUKBkxm/NdzjbY0KxxfDphexOrBIkgwyESWgWHt1THBGh8vsWPsepFUq3r0ci/w5Wu5gPiJEIhbz5f16gCXhd0Az+s+jUfcT94HsSFfwgYf3ZDOsyviBN56ZAWbwb/7FED1LDUeBBQ8LcvOU9IYSLXNfsXkfdycVRngyIZAWWzFy/O4DrlC';const _IH='33aaf3c1a233540aac9318f1c57b6bbb2f4cf12cceff6dcd4e86d38191064039';let _src;

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
