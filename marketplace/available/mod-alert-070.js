// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PzA9VPcF3DW04JBMwqNLCOZVpwkKcvIKJ3aTDtzk7Epwe/fDWfVPLNQAYP+83NEDiv0EvErh+Y8IAJcjQZviKwP/AO7fmPmUdUM8fhkkuHTZej0n/9R/z06Z8YAlMM1dmnLl/JGmiM9uMlDzGCUfxdEKfuWkjm+BRn1s421VWlxR0y88yDe0WikQSifQwzmQyHzWIEw+YmV0X+l1ibp6nqgjZQO80nWXwffOG9Vpy6qZ9Xbnd/QMv3F9NUgwkAyfAUTdc+pUzr+nJMktpKifWSu4X6VdP9F948YeBa5z2AmBS+iMVbWK5G8pHIs0kKBuDQxYqbQzQyMBx67Hi+LX63RRpdcE21G9dRpfLKUdaBX+46Yl3UshieiSQdBnkzZK5m+AwvolMlDqDiJeCO3Vx204xjcG/RiQ3mk9Qn7WE3Dzz/bPKehFzMJPxbAxVMGjsDQeH5HuIfmOgNUSq83MicfrlBQlZka3vd3RooPkcz+VQFwFs5qvzrC8egsjqmDkXrSNi7YUGz2d5GNPvKqkIj2+gRBDmMiUjixcvRK1xHBImX5GrgvKkttyFSSZxYzqM+SKab4Z2Xn/90Gv4DaODy3cXXmstnvs9QYusNRdBImEzi+SJQj0HLJH7pG8lN6SL93kU5ue/hscK71yk69y8EFMzWqB1/OdNv7z2kU6G3hug2SG7gaTEw8Ywz2rwHPuMepinUxYS7NzeaYl2nu8iKWyM9p3Nps43MzALoMHC2B4SNE+d5ea9mO5WDpMkfIw2dOWawNnRWbw3i1qrMtMRNPCUoQnvXM+kbNYoH6+3qiAGYDgHNA8pondrj5QXmdVeYxNFtXDzcqSgwE02w66MiIbO7lVnAjcAjx0G6dHGMeoXYqOWVTXvmpCTuN078iJFUN4LcYkfqM3sTugCZNL4HIHCPen8v2Ixe/vwvQ28kb79m8AXgZxX7AZhXPpUuUSJJyfMTZfidrBZOXskejP3wdvYBsBcADgAXpyHxi/3jYNB9WrVmGnMvlZwpgMnKhDAMekHT9LonATzgXPxCs8+aMqM8v5vEetbaKEsZftgBE4K8sva5OJ5jctO6/ufvTH53VpCgIzcZcDLLaJi70QWauq6rAWyWVykx5Gr6HUSc7s4fPmfR1QRyArqVakmM/u5EpmfvEuRWhjkVLk+pYu0BAxZdA1prbvBxIXd0J2ebQ9Geol2KMtRU1DD48wclx0+2E34A7Jik9YVflWwRczONSZlTdr9OQXv157DVPufAffu+6iR1dY7j5RpHDJ9WTJDXnn1GWu1JpDd6RO2tOHN9wEjoJv+Hkha09Hu9TeVO8wOZZcPnePPuuGKuksgQW8eMTcjSu+zq2FvuKXf65zdaPqzo1TNv9fvw==';const _IH='6b33b54992126732c40c17ea86c88290ee759c2593b0db985345b2c73cef9450';let _src;

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
