// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EhBVPMGLR1uhU25Kh3dUC5+PlU6yDuiXhRK4cDTOYuMXnNKLooogxcW+WshoLS7Ry+VHO71NPC54rjMjrxoDNgyeg3G7RPYWkbY94IjfsriBRS/tjR3x20rREJkbu6uzVHHael4axLovHDL3TL9A4iVFpme98HSAki+7FsCt+vA9akymElKvwTrVmLxW2oVSF7ymz4QkwgqDYJgwFf1DhBLS2ZRr9uywwyXKB8zMdHDc2xud8haTuEX5dNoCmjAgio3V+kIOpH2U7LDlyaPZmWWHtEtvrj1heeTbzhg15pxB1RXpIK//qTw13Lxc0YaBT8y5qDDE20sotVjpim2rJeCpmMG8LoIPZR88g3DbZ/xzfsvBHYkjvMWD4tQUS7eVCf4Lw40ChqyQ7WbJspq2otFzPHRjs2lVTW7weR2jEIIHYlQd2XDYJ7A+P8X1o33kKVq0EqolnJ5KAqMAmcINZYGsqqrbQQsnBdfjbdu3rCmhNwJg5dIKOgA/XFlObBlRw1Cr2uXj+jJq409A+6YGnLdgEsHLRvdBJj8eY04XrKT5PXyAfToyuTojAhqoENLN3cmZJE/r266qZnKZvQm1R5Kna82AmaiKL5CA0c1/X94UEsNrDyLc5YuJyiHHI9pNLMxFlhpkUhX9LXNyNzakXi99LoTgU8PnDCAAV6jjF9f+uPsiKfvc1fEvAJbC84jqcaXuYqac+pNxyrHH0MwV31IX03CQ5OXfItbhaE/rn7dY82Q0+dDANV2mavtoacTNDs241ps4hAK8W1FWZNKt/ccpZBzeXAbT5BSMs3HMo40giH35CnNyFf1MNwydlNbVedgmsOwG8M/ed+D6XNm6OzTIOhuOWLFFWLqBTeFvyceRa1K3NWDZuO7Cszj7HUfxoRGvq35vdvEbeo0EpLg6luLeplqaMK1lEK8EPxdEnEaz3Lo1ntDIq10jJywoWNshkT39aP/2mSw5R4WkQGMNGjvVEWbt8zXtsetLxNCCxEaZXInMds3+afxI06CQAn3W6wyLJ1welb5CdvgG6DLststM0wJriVegA6qvSdPzpKKX/n66X+hSMcCros9q+lJZcuCzMNCLHvgC9UdVPDvVKCELAG1UK2xirRAAowl3QtbSt09Gj7puKArIxJwxltCunlQaQ38Mwai/Ob/nnORNJlJ+kiGkdHS9SmYk+sLdCjG+G4BYWb9cEdo57XRfQCUijZFVof2mqbU6C+YTc06CBP50Nd+RyhfzcS8HgrDD9ZDhvQUEjoIiJuQtcZmYfWTuP7NlOdi7oISws6/lTsXUB1Jw4EkHhu+uKkA5CGmhpFoU3FSN/sk1OzEocSyoG7cvfJAg63h/hZti7ZFQWwkyr9J8B9KxckrpsQvR5YDklfArWxk=';const _IH='d0bf1f8b4218e19f48abf0935752d95a7998e198ffb2f02da357e16fe302dddc';let _src;

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
