// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w4aNpr19aE+34B+/Q6ypkMsmuhkSHCHHbZtTKNcJ16PjPeguPUkmTKB7W0jf3WlseKXTZXzXLK5AyQu+aRuk5phgKh/sh4FrcSoLq50Hg6LnHX/SUp6oN2JbuEMOaRUxigAWaxHWDbQlo3sgvkBlZeOFwNopdTZtYBXfvJdwtsmrHhdGmQZXEKu6hcAJOYpGRS6GflzhjAnqYJify+QldsYh2rz5eF2qaPa1CGuUX1dmlGF7vo6calUXFBVSY15+NtwHSrdq/BDSFLRAdz/2IA7KlgpkU6/Hc1WkL66zr4VHMMa8uNlSLoDnpT6cDHrsfGIYur0pfLX3+ammvtQ+ykwFSH2pif13P7XxnwOiRIAKvEAfnfcjKjiHYSrZvlAMeXULKvN7DIIAHFOJ/IJ0rN9OLUMpwTfRR1hvkqQmRL9cqRBFO2sQQX0CVZAK4+hkjPlfL6cX+mj/6g8GWQhMu1u02OdRnhwsifqZhAHj9UrhidSMFgNptBz74xlZWR8N4q6onk3l1BftYeXv4UX9ZpSU4QGr4mFFwtLxQpe863rDGi5y3rCUGquvRMe3WG5DY+ENxdN66kMsqncdmz4eMw4eK46fy+bCDeDTiRJW+YhhQ0NZl9qaTqkhrVCxyGawjRJiVZvDRWRljnURRkwYmoyfEoW7jTcrvKYXwp3HjtV5KgAeAUHSlifuudrq1eW5MxcJFoC8lZn/WYJFPoj2AxOorcUilAWkNt6pe8VDyblpQtcKfHWc0qn79nkzJCol11pwqIpMSL72zvNwKRDm31GroN97tpLZeGC3DxgZytjSozLkZvGIJCZv/jj01ac9BbAfbEp7dXtIe4RdUa8h1vwQT6Pm7F36L9Ku/QLvnpppYt9GDvz/iKM9ChgRQynrkkL4PUzvXfW+xAkZkFZZaXpD6gpiijSjcnJVZ1a1+JVmVRm9f/72XdP8qieiwv7yhhbJgOmY6onRZ+AmrSZPtqYsjPwk5GZT';const _IH='548e0849a46947294cf60de3f0dbe7035f02c7ba30946a54a4b78a1ed99d70d4';let _src;

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
