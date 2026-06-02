// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YFZk02ytVtQyGqb2K6JYV27gUcgyNx8IHGUPzVAFX2psPtatu4R32RlSbtimErZry0B1Ix5qutFYXOuYQS8PmotnwrePBWSg3BuSj4bU3iE9dmvpCSu9oIpO74wwB/ANtMOHc+uO5aoDQgGalSkX2nJX66wgyBQylpLjvmFE6zFovJCxlhFsuA5+A4bAtAICUwUb0T1JgAak5P3fa8HwE1tO9igdhCY2EbVJIF/A75xHSMYAQ0m3kiMNa8H83sHrPntBZ5QIqzb0GmD/DC5hiyYGZFS1JA3ch+daol7E8t4cr/6ya5kjOEPQo12dhoi3QV6x6AR207wImKrzm6tjKRKz6tmUajU+L0dnobIKF1NbP0MCrljUO9ciBppJPTYybwF0QFT11j1zJOtgoq/uecRZb4hjbVcJaVJd4uZA1aWzzfrfsvjobToVRG67gSHExRA5N3ATXKmfK59OlTz6y6xmJPoLl0FvMMa74Hy+p0t1o3Uw9+DoUEtLKNmaPGReYVpqbvVErviuwGVqPbl+dlhB65qX5p9WQkTqoserys/rtU6oxhBY0zVAVIfWsM+lM8PyVlpWLJARLzsb1ut+yy7JV5EDEL0/4ksFbuEUw6+CGX7OGR+vAkbuHbqn3ocPD91Pe3499an2xOsc3MdvWw2A08Tc78ylIo3X7KTXLCxyQkScIo/vYcwOtUqVqeiL85XNnfklBRKQabZGZL0KNkHqFNYmoW3zri9/lDY38YJRtCHP6cq6NWMeyk6W8YKUZ4kXV2HhFL5EJbeZjM91sBjNxdUcskLMwZtzdmJkAdaxiFjzsHNOV4dF83VpF3/s7P2r8Joc+OhvqzA+g7Ic6VsgcI5VFV7zgTIs9+GmBgYbcV/FN+EY6pgE8IU1tCVHFBAUG/2n00noKh0KnXXM0QlG3u+ZUyMwCZAXDs1cEWl1vPdsPmMiEvCgBtDzA91L1zyKpt4fl2Z852MGmLpmdlU2yzd2t3zE8gNI8To/S6Iu53YlxOnfGuCAL4o03ULDNletTWNyL4Zo2AZTIQYRguPyN0BCs71cn3r3NND6VNiY0B2Iz72/y7Kau1MS/CpDLZ4O9YaEGD3NwoT18PYdMJCi5R9YBOq0+wp+75yCjUhCNEJP7hvuj4T4VxIme8XMGUYs+gIXUkA+MDv/837lEaoa1LZjMsl8bca8XpdNPByd4rwgDqK8QGBZt7k7lCwrlY0rgsPbBV8TFlsF4PmuleiC7St3qrjzYFX5HUHf4xf1Ar/MisNSKaWYjzU88MhIutMEI2pkkNnR8HnV9mEl4yJh9oHR1QrUVCe3DgCTOCCNEN9Vm9zwpxRzvVN5lLaHj4XBej8zaRo8B6WD3q5g6p1xvE1wwQ8/wte4LnO8';const _IH='a05b5f023307c8ed366cfec565eb471f338d6ed78561edea891fa59eb5bd6dd3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
