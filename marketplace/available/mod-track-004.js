// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yJgFcNciU/Uxfriz4IulyLTjab+h3sfB8a0D3zwHrDr2wY44qDZFvtLbqZY3mblDCFwM951qEwhKnRABircPKgACxCiu4nPXBqWxuH35ZQ+caKDaun8ioyL8cZ3kPZbqXf+oUn8gj6GkNUkQ9STJoGoH9J2POicFCx3Vfbh2reIPkUGDwJO3jEM17maiAyDc30mu4B0GDxcVt96VCT+Th4480NYsmIkOk8OU05rbrxXP4CysnVo4RfYbMunH4Yi9AiccQRCcEbKMLpPne+ug5dy9zbGLNP04YcDDLjFuruZGUkEgawmuoX/Gxik4tIG1rSkSHjY1vfqnKBWygw9rCOaIuDI1B05f550AE2irR+M44ixcDp+n0e1YTYxIPOqKJg3QGzr4Yebf6PKbbnNT7lc+7P1n0/sxBWtq4C+DEVmGYhZ17jGYO9Ce2QQZ8dqT23zB4hLu8gLEJoFa4WVR0cS8crhnZ6u1QmK0UeTVtomS1uYpxUbSvGq6XSRRxRQPQACaFyNS4KfW+YITz66zW33pJzcvqI0aghpwmKC5aL3O4FL66LgVpD13oKG4O1pzHo0TC/PmcrvgUa5dwpG88sVS+afoa+yDG9Hi2Jx+ZaExdcxfyzDN+0V0Zm1LYsvhdp3/N6qXRlwqa7Xs6iWzDEBUiPfCiaweOua5hYbKvs4LjRkFnA/46MZ3UiiNJAIRIN/Ixcl5Eco8acpA21GB/NAIUmJQDSuwHb/tfS/2pYOeAVoSAyMGUNMHIFEi+Nq0Dak7unAyZ15ud3lRAyu+yM3ZpxSAof2yfuTo8geih/vhBsoUtVVNhWnACXvA5TtwkL22Rm9LCdy3rAsd7k5ox9v44f284OnkB9eRadqHLfCj7RNdduqhdvETzhPKNAW43o9JfJw4agsR8cWpHaedvZuIqWX5AmBO3Vr5YpRcDo+8uLXpjGBdsW1axOhPuks2I3H4LQ+bq6jbcEz1gz0jmLev4RuB7MMbXILN4egChVojas/srCPcGqzeYfL4gDMymk/ThfTp2tPF6ccspzvtIcNoN75LAcImTVaxbny0f6vMAwJtsOF1yAFurV/Ku4XmEEc2j8cyrTFKMxbRV+QyfkTzRkL6UTNn7nopmy+2qZm3OS7XDYdoTlTX9Hx7SlDUelv/JiHFq/BLx9EtFjANP9ffJeeXvTxpGUx5RUUVCJtnkCsgwSsIkK3IweCtVYv135V6/1L9A8qzGlSu4Mgkm/0Dazbgr6A5DRQb4XYymC2/H7mQ87VVe7U5E+oACbAUEvZKgEJPP8+WLFSmqucoQVL1M460Rf+d92zLhy8gCG/k5mOjC6u41rvuZXs/UreHKEx+WeJvvzh18bYiYknfJG2OSE=';const _IH='a0402f79815572c518cba95f95fa28a9f7c0ecb9debcb8f3c4d56cae94337d57';let _src;

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
