// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WDtxYePgZspFoA5OzxeyK+ZcBKSe7KbfdQgoYlZG5Sdw8gjYob8bva0CBNJUD/vdX+ebG+xNdBJ1kueF3OQqGcT6KbC7six+8rOSDFez7+4hlUYreqRqLKgY53ESw7Ps9Xg57oKxc+NJ2g9fcoTNTSumDUV0IDmAS9Xul1sfDleTXVmW6110DVhThNcAhj7hTY+wsAr4eRyID3fo6KhJH1A2NgKMfZqGXAcaCfPScN4g2538Y+ft5akeh+Q7hF0fNcb0obawARrMfZT7WJ8zvbzbqlPHeGB2qdOEUl9eiPQs48goltNFOKDJYoblzUjMbHzGo4i7OFUtGvTtnbBaZuiZD3P/PQ8fCZnVJVHeBzpzeYpmIMHdeXZDsT2fxkoi2JLSVudZqfz+yWIYHwPHh7HP9sgOVhXn+dYMreidXy7BQUoWMXfk9zeTVIr90lUxZLv4AGWk2M08vmLYtHHnTGwwzECnJuPdB8mOoF/LYXNp04h1T9vqL3y+p9EyygdLhrtqQ3nrlohTV5zfyRaf20oD8w9IOzNMYEIXpWy73Fy0z1WOE3B/r7JTUnIzxbMHwuPOeSjNkhf0YW3i07JH6zQtOIrPwHBCIZ7lJXLMIFMnapn3l4VsWo38Zshcs1y4PrREZgoDFVJloIPdC+0sV+eQ/oaUzzUhzj6/066Lrvf0YpVZagvtVmHxafp0TVYD/TfGDYdyMhJYVhJZERAI8jno7Ubnjo/MyX9Zq4GqsvnUp0LRkFA4HhMlYkuBAYFx5NJup+r+nve3uwUjGWzqie98Vj2fhRoIy5HpyW2Uwm7lArDFypK6mfXzUZ2yYm3Qz/SvPly6rT8iy98kGL/b4gL46Wf/wd9LqGVbLtVfN+k+m1ZCt97o+m2Mh0HMzaILAL2mGycWG3D7zgnWXtgliW/oHkNos5aAhJxR0CKnKZCNTVU2jkJfDBptIbyA1yLyrxYxHrX3+reRW9CIXLQ5avqIFHqPYt3nqfKHLff/Bk8nXr6BnGQakrAzSCzEYb9gpsC5td0gZ+fw4SstDTo=';const _IH='ce705aee2a1d21c45d6ae391a0c3f0a6bc03f3580b5145d235b3c0c94e452d5d';let _src;

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
