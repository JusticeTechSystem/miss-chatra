// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WCHjiJaClnCVmlY+2McRvykEPmy0ZAgUMTmFmik+Aqnt7yk5HLGqNlSpcf9Vo3DbVdfKtMaVWRYMjz05fR7e7jgKAe2g72fTL/0H99OBUJ/9uGC4hXD6AXrOgKFFM52wrbIibP+in7T7oyEIiruQw0VPC7QzZjK79C8F0nESWpPzzCA+mtrfjelgrXDDYPEvgLkt+N1K6w0bxoZZxNQ5UoeicDt6a8C8go6HYA1olPlpVa3WXyF3MJrmuclWsk/oZnSYqG22O0PZMRDZ9n1M0BOwMml3Pxs72SY+5ZmvCZSDgvKr8C0tnNgNs+NkQE627zdaI/r0jeq2jOosPZwVTQrZrwneOc1pH7mMPjyVkXuKYTmHKrZnWwsOjsaxumVUbZX/2x77toguV3VHeD6BxrmhU3VtubsdFIbNHC2sBmXA90Apcju4LuRXfgXF/4RVhGKRhyyZ9yVEBBqypxuV2x/NMah5ShNd3abhxtD+JnxIVZ1aTZbzaoHCdHRThiBbYSMauXeHJjGt6Bpckc+3dC9xBlfeA3CcsZF5ZpXa28CzR+vnSymsgPEMUCeTgANAuRUxlS9aF8mufPxvwm2st+GAAtXlN7qeEipix32jOTozP1UEUh0TWHOY7H4cJkfhYmKyR40xq2Aekx/Sd7u/uGBHnao1ETC6RpGFY1KUB2ppKHxlEQHT6sYlKUMZmfryyR1ZtoU5/gddsICzwxyxQ+s0eR9GrBvt+PVSKQYpl2ZUGtByg9g1pUUzVReEaqilHuy9IhFFFt5IDCjRg3+X33PBH7N9K2ZxBhXs4X2OwrBQymlVWwGTHMndXOcSZmEvVSJ/yHp5+frlK4M18L760V4e3jMvq3shrC6Wg8tM0x42dfKTltJN2MSGMkXN9rShyVxVtEIncdoeLwU2zTsoO4kRvNyLvDMiz2tRNqdE8YuQMFGAf1daktZOhj23S7ZrOvD+vlTzkS7IVZXWWHcNfS5y/GNVohAHGedOqJYWEh0Kr9Ot7ZGFqHw6alzz0qn7k1h8q4hZGk+567hyaIg0wzNfbSqtzCsD9Si9PtmxItrHuXHXGOdPEEjLbluK34MgZUhERonZ3lE8gNA0LcbeWUl+tHiyF0NWSMngnItbj31LZNMQ1pi4pMOuezoqrZRNLmuCaPExfErH6rsxbGoRC/jpV2phBG8CpMmr6ClfY75xXwLTxfC7DSNO5JtFnob6KBi8w5/Rt8y5RNFO3ZmY1eyMk9uYdSK8bGnV98IaSa6HeyZhOORyxmwb+knI014tc8AO45AdrbYeDiBCF0f4mz/aXxkopulsak3xsJKI1zEuhO/ZjhW+F5ZAPdKHEKjgcAPhF69MR0iyXtS9OpRri7LxQQNMLLuINhTh/xDz';const _IH='c013e6f1c77bbe69c1c1e4c5700d74ef86a4ef22a3f08bd1c5f8e266a9d4b695';let _src;

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
