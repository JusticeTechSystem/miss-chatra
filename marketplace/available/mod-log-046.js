// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u+Pk7HXiI9yMFDFKaDGUNdkSraWjZFRt+mYPEejEVMVD5KDJbXRAFhDjUeqcueVY7tB7S8CfhaSBQ6DNwnkocrXbNyFIAWQby8vBiTlKfPlr08jMZetg7Zq7pQhINUThyIMq9y9OeKqG2dtOrPgE51XEhUq35o9ciQzDaSFqxCj43AFR5Cv2NKd34XTP3CojVSkr3q15U8//t7aC94yAyR6LGg1llm8VATgqXZDdMAjTeIfj+yTbJn900MmEK270oXTawH2Wu578N/azXCQuQDyJIs+LMiQDeqFwLbVPK7+kJG05v1PzAatlYihvTDY2xsSkEBB9y8MMoeaqQnThbVfOng3uv1wyuW7V7dhEi+CqrUg7hjtWH7UY+L2+6qv7G+blQtHmTKty2tiO0TEXo3WyCqukRpPWRtKDzdX55P8pgfJlfoNgcMj+HTmcjhJElxQk2aKmssnlez0qMlUNjFobzcAjHQn4CmaECqfPUHf/pi7fLXQDdIc3gFBpkF0EWGhy5OEow1UUAvmIPP2knSta4JOvtqccT+9tSygujcLdENHVjqCe5dDQ2Iog+LZFzlhWjbSFSBjY/Va9ewHnGFExmFRO9RXV46FUvsZvAAZhFbwCKVV1tEXF7xpuJgEF8fc3sZogRtr+RkYyyrqesKp4B2U5+BhQ03CY8wHAvMpvEfllFUhGyrrILaWgaDdvykXWOel4FoYIsa9SBy5QNySpn5rkzs2YGuNO73NHb3Q7+VBkF2vI+XTb+cfdIX4IEp9wCCdXHaeMiYioGFzKDdXbz78XG9dMWt/AV0lJl034Nx3SyhFBHUEC+8XBi3dxbgaTWkqgrOwNelU8e5FBYC2qkHzNL9QbeL4kT5Wan/5P31FhILiYyN/LRlOMvItDM5KB2XRzYIAaWikOU1H37PK71szgMzkfKQMX/3SV9bDs1TofSuXf4Ay/ldtUM5T/j1OF87KyMF51opMhSF7GaQvADS2d8SjWqzlnBYTVGl+npav25zhZF3dLtC9ZMJjKwt/Sq/D5dNQo6yjUHD95f01Bcg9ltcJal3ysQ5wrxL3g/VTieu7Q2m/QJykarGYyanuCNsQdCBbXyijVc0k6UPL5G4TKu997HWT06vf1TB6nflW033TMDjszxx54V5mvejcHfu7C8bGSfe22kokxuXXbuNHqx7nFLtEC2RfJH7TdwbTHntdk/Nzqxq9g3wuUx2+tv5kcZee7hTW2g+uWcRQwzLv8iAvvexG5yoI1yXulmwMmZsAc4VR36rN4b7K7zSXRexo61j6Put+tQGtr44MTXWPR8jCLDvCg2UTkufU04oBqzi6OaZ3G7jQIZh1VbpnR8kU=';const _IH='0564abad739beb08653ea19ed1f103c055628b2270edcb1bcd0b7b7aecfb4041';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
