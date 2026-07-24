// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsVPXBDMOkckbVh0n+BrREjSVHVRF+pBsHPKRlknVuPy53AVszWUzlt3Y9PrcWC16Wrj+F61817H813F4qqp4AX49jvvIzxYj3+ISyh4MWpufxPz1Q8FEk7bbbcO0yjgqYlOe67ARma9N71PgurQSlPkWXUDFBjtELi+X743H76tLM5qVlLXMORNwj6nyOfobWRxmiSkRy4qdCINJHmCEyg2PrtZbWrtAJvekPPeF98+NHNN32qxL3CQQEz8V7ZETRMjNLGep+qUtAcxWIQJYE/Gx4CjoRJhVm/VwfTs4jqnJ3dSdd1apYNrAUlzdiVFwrP1LvTSXLHqqCDRypMhUkb5sunkrfG2Lfbsq5X7xz9pBU7pveDKffptQE9wJkTOmpPGoHPm9zBw0qTtmFDGHCGKTuUcJOxOLdntv8htqBTRmFieq1CQJf5gZbx+hIXZQIEAqKIIbXuatWZg56s9/6BWuC16LnkbseuIsnkve7TmA+BSm3AGmwuLPim+YmTGFL74GvQpDm38GYQElXUnZTt3kolDoKiTd1X+MOsFff+P3cNc4kIxjEx0icwEBTDcPIk5mIJROHp89BzcF8t8Nz4nng9rtBJ/FN0mKB6OrDguoV1lJyo/hvZExPFa3bemqoQwlY8FTiEuz0dGdNpoZyNPDECFESxW0LKiWZ6HmhZSIFGV/yoUhzNC9Gk87CTUcpN11jQR76s8caHSMPkbLGjiZ50RvDPIN6JQEGLWDw59tpvfywnH2RGHX+K3TD7l0NAedQhIRG30stveKb0Hh/9WFxJn0D0PvoPxaiajNa4NvO5G84duZElFMOZVl/g3sxL1gOzLjqlTRl+4SHFuclEnlaVgkKan5rrXYvcIqqm43aepu9FJk0qapa8wLZcczLCGP39jD0qrJ2sl401RV23EY0ApcYxx3Gos1IUrE8bVEuKVTTIIxNrMjQwFw9Zbr01gslEkbF+vJigUPth4jHoEuUAk2q0HHhZ9PigWvQdgVIYhmD7CPPps33wQ/NCSKr6KjURDZSavDno+YwhJacirLHL+uPO54bnZmLyFhSCtSf4oV4utPd5IV++9ou/xPPrpoqni4NmI1mwrtbqCqknYObR9LPR9R+2KRoUnbH9L2xavF6RRcfxyn8xyXFyM2Fm6czCE4HTvTaeau/gvbJbyYEatS9sTe9wC4PMI8WMUhKuTNM0jZxgkOu3FRDfvLGmpTdqWZVmSgoPAU7Ol797SaQ2m+UXNs3CwJdWWV3V3sncXqYuCwUvJwPLcFIj9jhXKUJTupzKF8SQ+IQ/R1D3egwF+TbZHiPMwaJXgQHSWgjzBzX8RUiN6F1oB//9yc5XNvnj3IKR8WpM8TkSVUJDaPU/RlaOkNGQhp20JQuCa10SFh4Qkrl';const _IH='22a48d225a2d29c48bf835f6c13f1527df09e5423ff0171467b52dfcbe6f83cc';let _src;

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
