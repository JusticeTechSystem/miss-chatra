// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREwE+NeFx1Th+6OkOZQxZwXx+vM+8StWXQUsRInjdhCIvZ8KbgE7FANL6k3kvAiUwbOrjopdPBDBAC23RCHPTUZ4axn3G2hHQwQDszAP3KW2kNIciAXTGCeW7TSS/Zv6hQ83OOZV+lf2FOUgNudX48Vb0jQLPkWvo4ayVOGH+eFGzaehx34IAOgEAXu/eXgDeoBZ4WOi290DyTs+kv1kXNBMrBYCmn7Sbeer37tWj6bMMm0kfJeYF0rRA3iP81vazl5YpimlB98OYNQYy8odDc2mRmzgRIOqjXZIFwE5L6UD1moF1g7yLf1SXQq+G0IpIiHSpjsXNAbC/5r6AJ6Sf9lbK9oB0Hymvf+9bVRu++Uv60fLOPxyrmCuVz6pKTU7kFSVIsljoeTeMMTtFGynzR3CAzR/nagXW2FFzsQGsdOdypLinf8l4tqBm8hjZs5oT6qt5v7otObV3PILShiT3lhwbygSYnSrag9t2FRrC+zoSdAM5Kg/mubqsdmBiQ/4sj0gGFq6FFEvGv99r4+m8bvWXySGvwqU20NSSuM42dGvhEjpdWVOJnbBve8z18A6svTXjycmc3aSFjMpC+WhOJHcXQDWen2LO99aDzL129qROHOnAcuh0i5Pxrhae7/y6mCAa4+9LpMiyL8zzQfeBE2HvHLYB1dpGWPjVdLjfXZxPc0/sDPsJigLNKcR+/twD3HcZywhOUIRcJlg1PgiycP4ce2IaSvgwCcr6VAg==';const _IH='c6e8c726981b5546f10141ff39023fedef79e900f6a1e36ad098bf749656763e';let _src;

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
