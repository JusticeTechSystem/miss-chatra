// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSzsEtrInAN0zQdlXoaPH2JN1DlTzvNCc2peglx9LMY18W7mhKUY+KyhwexYW+RAXCBbmSpKzgS+QNiHlmWWzFmLisNsCnFnox5JvaS65awM/ceM9Zw8NSBuJd+YefJHbG6O9RdsY1cZNdRkpjrtn4L08cI6/DIyhko08ICf59pWUbuqNL5xqf5ZoIZAz/uud1oGLdx3jOjfl24fpjCOkKriuieQaEW17yndDzraU0dCy/Jv66vUGnUl85KxjQAkgXEfmECTR30id3CyCbnSTsaTSXWKU94ysIlTMrNc/FfrI4X7YFJLa9IBvkLkerptuFAClCuY7xpimFY97eaclJoBuSM+n+TKD6sGNM0gCAPlQouVq9YFEmj9mpeN9rn8hshKTtpsA2/45V1Oxy44mhv6mMljtn4BbBvCu1QicqAHkJi28Yz7xAYxkexHTy7i4xCCe2lQbaTTvDQi42rxqqBWzDJi3JV8g6SRqeET5MET48aDaSwc9KiBRcwHlIm3u/O6xeM8inZNOMlGUpHoRCJML5c1S/L4o1CVxwjm5w2I9zbkcktuwcmVam2PRVhLrpW8z6D3I1Y1lcYnx4fi+MFJxLKJ3vKQJ5PYxxU5VZsKs39zf9CEjHdAwe0qqQtUPcoMuRvrNEVLTzbn5OKB7zZMGwnSEN6lpNfvJkJV4ivkpyloXu/1FCnW7AHva1ScfEYDvHQ6H4gVkZ5RTKsYg5ujvFVDQTE8uNb5NYhSWVW';const _IH='210cd34a0054bc8d58594e04cd6fb9945a19ece1d98d6ff3d367201c3ce4bd51';let _src;

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
