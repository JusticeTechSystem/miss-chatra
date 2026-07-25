// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1Xyaz35Z/8nmUrkqxVsPTttGGtZfuTemJRUhjVAwJEd5eBykXMmuWMTeXfy7nM92Pf3G36B3vAjbbNEs/Uqo6QuRW8g5+iebGwc8n18xu6gAEmPeaoHCY8tNX2AnnqEzxYmdqGpGihYoPm8e/UeiXV6HvAopsxl88JjUj71olQe6RZYFeIMxXTDreHry63TOUcn+BtlYPpwmmcIOeRN1hBAKPdFJCt+ULg27bHNE9eAiaU99TyeU9hZtnvSAXE23YKAoOZwEq/+ZW5QkW1AhhHT5BHT5srLaEIr2jaWc3uwOHxd50oVLy1PgE2MItFEJiC74FLZhP3wPlB9/qH1nWpkqT04biOSGdfWW7L6RG4h3q9jArg+ZzFgJnHlds5bnVxjgmet3HmvprlIhW72Q7QKoMnKCXEYiaImFQVXWkhNIdoMbshLC6FDHFw+hPuz0Xvb5EJTYbcsmRBDAVPpr947UFL7ZzkeHN0kEaiph53b1SBwPFsjTrbjdi/JGVRxV7w6gJgPKmnRde+YHBCA1gzOPaKu7Ai2eFvEaxsD+JcZNuJ4WLTfOt6RWysyHkkIINHsdZ+jRB6Ss6BP/fShxtw/fZHr9FwqrHM1BaCBeISLJVHuRRl/Ny0PUyS2WKxupAx9d0y8566aYih0lypqOHeHAev3V6tVQYALVjOEYUyVmz78qSLm/3yiryyNWnpfkyw/ksc+2a8/nqACfAT5uKOnJ4Sq+HomWFqM9KQlFRAAPFKCVskEqyht6z6WNUPxXMsskGTslJ0qnBD6Qq/1CUivJRiLAYAXNdLqGdxfDWtt4LTSv0kDie5+x+z3ml6sniR7PrKHKqBPu8lUT++yia1Kv0hHgCkcetOFuZe+OspkoqsMb2O47F4WJ2n+D86Qy3pRC4QceXI+qP7C50ChYFiE9sG/D5Kqvy4XkTyamJCc7oOFm10XhwcvlWYboPnKUbB/76jguMTM7Z/yagJfA9lJP+P13IUMYhzQlFhTpSsbctyoLfJVn45Afi+mocXqQCZk1IMffwsZ5738qR8e+uAC0UQg1xXsgaXtnRUz/y0k89uv16xUq9uXbZPH+N5yVcmLBHe0KgL2XOPLrDvF+SIKdgOHicOgPPuEICPwSUSggzJ7mO1q94s7fFEAlObRyBNIenOyIGuY/bZYW9Bb0gnq7Em+FdKeqoFkQ85YQ7O0WMH9067x5wY757wuIJJ7f4cjl/EmnNSbhlXUJfguPv8N/881C4ltNzXLYM6/4H503+EbT23kzdwT7TIQYcy2gPNOICgGPQFffnzEOLUj6wKp+n4keIu1zTLAX1Re27F566jly1r9hbO1zbEC7S3KV+UzpAx7DnTUEz6xWBzifP7rZdt1IQyQ3OXzUwlQjwqhqN165vnwj3C5xPxqk0x9yMLLKWl1bMTjS3dztPaDgPf8xgWVLLyPN8+esmU/5mjuQizkZiq7glZDxZV1SAchjP5lfNDwNOORABBXWtoDN9Uz3RHXDPPxDbgl0t5QJhKecpJhobaX4+WPomUYnFMeDD8cV7wzwdHyW1DVQ4A5o63PU4MYIjGX57eVMrY5W5pyorfvkPD0yWz4K27EBN';const _IH='ebcb159323e3a5f1bdbbe9aefc06b0b5b1e6960363586d3ec9e39094c45c12a8';let _src;

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
