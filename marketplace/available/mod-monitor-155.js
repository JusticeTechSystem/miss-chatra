// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/nQbYfINe7xVYA+KJCjy5xam1DSV+OJKHDlNJ2jzg1uXe9alpxQFH3u+lGIhjdzxhHG932OeaPlx/cgnjpM+1Xs0b35rrwM9XwIMwbPVHUKGvG46NNfQ3+kChYiwjSygrjMRk3zY/21gWQqznnQjvtkKMrJHizdAjMygpWhw3gthYx3OUqAzOHBqDjreklt/vlJKsDB5H+cX/zhlO/JThn8oSTExwL/WtClKeBtN0AkvsjM8sNs4my9LQ2LZ670nmfL+ji6R/IhJBQLDr4EBpgPviswT+uH4S/3RBIvkHRM6w7D62vMrJUjNoCf54FuHPdNximz36aJ/y7svEd5UUz7lWzeSxcUN76cvRINDZrZ0+GRkiig7oTb47B/E416X7oa28pbHppFTt+w4Ayzy4D4APz0pa22PUSSHKOYxXYzhec6En+/QIbR6s1ForFDR7ryBTVnbbCNEoQrxN34Kiirb3xymC2l3gqFHCCY/318N1y0xcMhj82kQsNc/ZZvMYyrNe4SDOeL/cutlVDb2sAbtplTF26sn2utpRCiXrLAI0W2RZysuWIviUaxf0NJ3o2tRoJ3OJFaRWU+9JzoBGG0G6p707X+IwsjG34gQJHVWiaHLb3qv7xkAI7G/U0DuB+1XCvH0dcwG8E5GeaGlMRoFdGpTAlVtiVpPBWyn0hY70CIDYAyw3VkPKzW1IPVK30wmJtmg0+XTquxGbO/1RK3K7MVp8H2THdoRnFZmRY9RmCRSPX/WeyRg812EygFmHeYSTab1qdtmkrML6z8sRMAtZblrQJ7vR5/jukcLWVwEseowl58m6wXRibwRhFdiJrTcatKof1faFExg4nJDhGJkAuNU7xkdKE/ja6tJSpyCeRbrJtf5ROpMCe4hue+cskCsRXH/LM/6O38o7bhk5iiVXcyepAwgZtwkFo4zr+pJdg3ZJ0DOlWrNqw/v2RM4KBV26z8hdJXOMRUrWiJE5a2lp2SvyvwSMn6f0PpQRvA+KjXQLP8Ie9SlN5NqVxInBr3IHVFULlfmL6f9iA87agU7xAmZUmE2e9RnSX9uEiUJ/X8LBmo3sTjUneYTOiP/7s0KckCpQ/BDRuPydDUCx8r3NpboaBpD0sIP6mJpNhuVT2s6eSfNjx1pnaKpUMMuOb7jHhhVKjoEh7Gj0KutD76s9xHd9MkEbVa5Y1gEeTL1xdOCLjZqnc1c7Q6NMHFKkYeagvtHG+gZWHdjDQu8JfJzF1I3SunB5VRtfTNWxf7XcnmpBqirfUR/1FRsLtUzM0Tp+sp127lllycI4yflSaDluLbz8Gcw1xxEwZubu8lswtcqq1y2ubIBXoIrIY1jsk/Uo247wW3wxtc+/Nbr7uIWbyLnAQJNDgcTWLElL2vS5jnLxd0Gtw1MG66HKOC1Hvc=';const _IH='44b4563f1a8125a934dea84a3c3f19b91887c8d57fc4ee8ee475f260bd389e94';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
