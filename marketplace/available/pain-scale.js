// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bnmjps279HFqB6zwYBKShH9wLJ/h+OwMbEXBk2bfkTZ/XYBCnH+3VNmowFoOEVv6XV79WcrZaFuJgaRjn1BCN+2kO+huAzvOxjbzcXNUlKF6EG1XpJxjBRWfQqwDv8yDTL9Tmv02mxJ+y0F5avMk1d61nV3uL+gEzKi2G9K12LBzUO1IoSRsn0h2P1tQ62LQqvdOBwcb/7al+IC1q3tMwAGhqnI4Gjyf+hq6fa9mzR4dR9d2sKU7zCAiTZFUHs3m8YPnW78J8azwBLH025PxIfjCBg5i69aUvQ/aF0bDgiT4G7Xk8QsJAIAjfHKu4bHlw1JHCXuUa/so/RGe3XTaGp/rXfe5lQq+MjCnaZnI3X+T1IDcV7b+5yu2d2LbUfuoVHxQ06Xb5KbUUc0DAxxyXNWdOP4AsXgYt4bOFscnlxeritKshxw34yZd/JaZHQDGLkrq7iqM2mEtkKe29LquGnVVf3LRWRDCC2F4yeCshUhhTBhEDjUyFHWCLmlKvRGkv8OS+ZRkVPSQXbXWmLSj2pjmsYwND5tnAW4qlvGatK3isinkajer0PLYLn0fWNCPmvIxjMojN6dAxIOyvlUGUsSLmFsQb5dQcLSp2ZrBS2/gLWbNItV+1rPFT4/R7/MNxtx/AwV+uW/SaXkKhggBMBxutC/9lweA3XtVGRi1ayTZJkgDJRlhu14n5AR9IhqKDv+qlPRikwih/Mbpm9XLev67H6O/hNNZeUl1VyRG1yk6Q+c8AN8dIHRqeVaPryNX38gqmKgoBPVJC21vdRNq0VFE416olGjQ3vVzdcer5+LDZtQMcVWP01DX3UeB6ggE0cIBmeSoIZOcFTjs+xA4cw3+ikAnRbQYHUoHud/Mf/YRo6WiiT9kEdThMPoonOFCWfT4GWG/bGd2NxQE3aDehHdVB0aO3eMEFaKUu6xGNfTVvSCk9xYO9DrPYPj/P7nu3G8beBiFIRqG3b/Fhqf00KAIw/TDeugwT1EINSUvJ/Y3yRVpDT7NZrPAna1aw36qkGKOSIK/Hw6x1FnQX7QHHCdONGajp9CuMMvmmA/rX/J+gf69SbmcPE+9XmHplKd9oJsCxFtgf72EVcNJyBFhVhswFhowQccnpa1GMhGvN+CP5AJxqPATOXXFgpPVEGGR/4mipDDTU7KK0o2uh4GwpNJcBAVvFfN8elcakYQoZEDcHgGASHJIZSVQb9o3zLjZAh4UHfrQDg4Ew5ayVio2Ke2ZjIxl/Xqmk4efFTDnZBlREyG8Kv5TOemd0BAMlejiEI5Er4iswbzpHY/oDEwuPmzY32owwOrg3+Nk1wNrEIRyp/1VWbDe+G8/0gQuA6K4n7i1TQSAGXiJ3V6fzaWteb4JbtjlFoB+K62+nEne4RiqcihFquJGhWe1kmqNymV5Gg+wSa48A2G//qD8Seix/GDV7A8XGyyVBbkTXvKkhx6Lse8wjWFknze9czWDmBmCHIZACyTxwOh0gMscQf0bLDX4TsURiZW60uVmRKbzskgfOzhGA4cI6+NBHK6UHfzQulChlljpi7399zzt0qtCmp7vebPDBpKp4y1uBb/dCKip28UG1BfdqZXrSFiI0NxJ4J6PiIX3eqKU7YV/Gw5/OC3SbTWEoDZIbOGlCbEpB1fgFr6NOBTo5gGV6DsIAaX8GUoSVcwxtoIKBuQagXYChw4ngQ9KKaAe5iX6H1dg1VpQj68=';const _IH='7d27620c9bbe844dd9dd7193b84943042d212ccf5daee1bfbc15c122247b9647';let _src;

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
