// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KdWDQfM35bvp0YD5+T8LHvjkDFOEa8+pzZgHztkZp5AUzWY5BJRAv/BIjpA/9wGb3tHXhb1PZ8Ri/rZl3EmJGq0BFG4uRoEzDtNBOOKv26PcWWx3TR2N4I8Tfnmd0wSG4Smy9FX51/ozNhAo0RPcMmck00klRkIyQBlogQ03tgLQtV+ejzBL+2GVOLnv43PoJmOYwbDiZxgEWnghRNFD6S3wZEb0SJCNi9cF+p3Pu7DPcZsa8Dhp15P5wL6L2CPTCTLl1JABY37tx8stkkb1yy2sjbffTJsZNxsozqZYNZRhmjFaF/1P2PxWc2RYDqWVMR4q49R0ZbP/U7y+hnaAnf6NgiNTvTSEF4UHeg3XjuZ/9fQGkX3B9DOmeEwG1/sH8HjE3W8PkflmKkJ/QwuYsn+4srrN1pxuJ98uQcORexxF9uc1JliPLkbt/aDJz8hHcQTwruaARuCYLed/JuobLk2YtVOMOPTDMLNEsi6iynai1nJ+FoNjlqdBBSDCPocci3JclCz6cbv9cEAbNbacKstojevcYa2HfaEoIgmnViuAicKcz1GtO4nfYImO1qRo3hksXU/R2cIm/i3sZuPDl0syCA81EMqyXWVsWBGWw+Xe5fG5EnWSGQAlzwdQxsSVEJ8Vvyru+CC0P92T7oh78jC7MAHTvMQV+B6sVXBr5iFQPMWhADmnbk1wAJ9DPeSosuSZx5OYXROiSHTDNr7zu9EZMdBqi3UiVcXXq585U/adN/gMytjC+A/OEDQqCiIoD56yShSmby0N39ZRmAA2sETL5ReIbb+xo3diPVKOj3uXDDgiXRuEv+u02jkCaOTrobd4xWhtsjkoXUvrXu4aZFVVy6MPMX8/XpqTwWL9yFUzIDLhKuOfK2SUOdoP+iWr9Eb8iJc1O0LJB2q5tfbU0oQJxSgm0JtDaf6EgkpYp39ujGwhL6tfsf6KFQ/RVlUlxUnxzdw7bP6IdD+ufl+WIf+zm+hQxqA2E5w0CvAhNv99BY68QsWwSi2rOu/IR+CfkvuQWKMlGGqx2tdRUD9OcVM4EarXWqhshbXBLvcBrHb4Z48PgPjt7cN3PN60a4355fSLnLxRF7iXxqcodS7HKMuUAhPyw/te9ARSlS0khtj15F4MdJAwApN/Ug74aT+1sPpJSsDUowArt9U5lOP/X048aTWFO9dvxtE3hq3tGnKGQLMlGgmkNJu2l90ybR1P0uRwoFSPpcKNFFsnYGpuX1c0G86PkIW+vOo5jztxy437VjOYa7J9tKZUvfQkRSfFBfgUZbslzUcRu/kEaaVhPCG2sNVz3cXeIOXlcYE1JyBuBFeH6RYRWWr7bJLNpUsBQL5DfZYYku2lIbnfdcv97dRgynz0OO4mNZ+0mXPGkhQQD/35pDqVXIUT6Xdz/3Hy1f1XP8iOWsw6P3wZCY2ahIaawY+sE7XXOPp8enMG9k1nUTz8++kHUXKEEPU28FDqjgPc/58QofwqXIl4Etpsm3hyg/RgsDqCPTr9s8/eQVTnvQVzUAxwyQTbkM4rH0Z2GwsLReVlrkE8HR9g6rK6rsDPrOp/FsHjpgqxBYcDFUWCG1B+vOpeopPxsv+dVpdjK5PijoiAYuawbu18zkdHqKfFYRIUCYJMiDt6RDFXhZ5dtXgZyD8vOKweuYXqIGFMYh4hDErQvAhXtkOfklcjwfADW0J6oml7TsQnZwedbPbLY4ltlUuHGQ782Xl2tD/tnCb59lYUWkJ6HbHfyzN+Q2m+qZWC';const _IH='97bcb6bd6189b5dacb1ac2f0513c55bb5004f525d29f8de523b1ec684813a743';let _src;

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
