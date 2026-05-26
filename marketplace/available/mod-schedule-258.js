// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrsDs2MGBPppbrsEu3FY/wNlDIyvs0nqIJDDmS+UZYBZbDIt/sIUCvcNzUFmY/A0zjYQwoAx6DULK34P4EgQUR6NPxi1SGgpbyFyuvOTz/4Q1I8wuTmouJowmVpCay3hgVTzUYsnfAJ58VCBmWkMAnwPH0syjX7RigWPCJaDjt72wkTybU+ydUpQRnAStiy1DqMZ/BDQATxv1AidjmY5tHAKaW4U24to5an9pekdvL5YpGY9oYy90zvVQ1K4MPjXSvclAC7LeiUMUU7jxdSLNhEuYFGLiV6Nmd/SdBRhZ5/FEwooGRTslFE3bGgRrO9sLWjfBCTCQu8IAoBD2URaxvsvechXLXNq35l6jLX8MS/fvfQ89TBD4r/eY1iux09u0j1BCseW/itSNZvFUposBmmMo8nB9j2x7N94nstkJqGaVAhm7aIZK37XS+PK0FzS3Pr51gNtDMCWVPsmjUIb/aDpZKnomanTXm7qwGLE4MmvsBHJ0OiK/VddWNlPqv8dVQ78RjEi66dqZTsG6l78P1DP3NCwAI8d/BF64v1LD7IuGQoQsfHl1+TcA959lNtEPNK/y1eQfbhO+G4b1HFhxwnQopzNyDf5nS/bqKhhVf5qr2UEEIKb5FGTyRhMglD8ygSquVxnn8o+RD7adG3iBGGqsYo0IyDBUPJt/Iu5dxe6Pw0kzdMDcPNW+GlH8t+QGR6cvcFnrgzPtcWVqskz5ZtUgF3ijUqSQsxRGUsnYFmhvNk2wGm7hq6GyZvIvi5a0+mE8V9FfhSwx88prYE/2fBjweay9Ivd/fABD+qbS5dx7Lr23VA8ApZj6T1WLddbLhxyfvT+zRebw2ogrOmx7hnYC7fCGNWegJs37HbhmY79UkMvKztXMlWBn2dHsgY9Or1R5AMjoEkXGuL0dykp7B0YgQi+v6HENEQ8n2y7xB5PyLkjoWunoRH55nAi0pMVx/YEqsE0ME71hlozyQQ6X9rVAmNWHatnR6x0JgW5I17y+BqUlLjbK6jxIxrZigTfXwjeAc1MeBFXprVG00y8HYpkLNhx991uKr9CRwNbZeg3pzKZ/QPCNGVoLAgaUv74KlHR53758Xn7o1eJ8bGtyuhd//6ZSIHvD7Jqq9uP0e8wRLTJqsmtQfAS7Qr+9pgn3wNW6fIo3530UecMOz5l3LUpyViOJzAywZKC4mg6992TXFUp8M90AWk22j6XHZYUhEF7SRnRXNuRy4pPM2NiNwoUrAcbaB+AbpYz6aT2wv4Ktn7na4fFPE24QHV9vDG6UAo2YCc0YVv0OAHmd9dNJNhf1lYu/5EDxM8dVznAg21GpbXQ53yD0W4+BdB2z1qZN/DmQIPqixE7xE+aRUgU3EUzKjOt2eQHjrqGgDBIxWayy/Ua1wXgbfCE4BU6V/YYE38uLSHyl/CPBGlW';const _IH='7882a2fce2c9f3e24522ebddff8f7c6c87d148a40a591bedee7007b54abc6163';let _src;

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
