// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ivUscOdUPxYbA7i04lOrGIp48iqOJKh9HkjeHF4sq5ook2L2AbbWACJVDzbVBE6uYQkIFF3qww9ALeDM4Tu8I4ZzpgK2kwsTZvCZwt3XAmMewhMLXmSl4J9HToM8nqTtgU+y7uZRfMYLxh4XYquZuy8OKXHJ0aPbRLB7auYP0js6MPg34pMQ4XGwY9ny1HZ80lGu+6iWoNhNCUlh4qqn7t+hjaUWkJlklxghEIpejTOf5U8awdwsOP2LfEMUOnKuTjpdxANDv6Cfv0QMaiFlx1H9yJqr5NDBY5ZI7nHxLR93y/P5NHQbDUCHFyIWuc8Zk9WDjfVyM9pna4wGbV1u744ApKlTEhgiySdLCihwoyXcRk+UD9mIMhI+eh+firr69jZSsaSEO5K+p1XH7e0YrUD9mVVR1T/keu6zYgV16RKbanU+RIzft5wBQ9V5mvx6/7i0sHlAM7NFMcszgivnDbOV/Ubfr04aF9Ux0eAAOHvvjzCUef+dyijdLzrFFLudpdCqCuUPFu4OEe/nwj3HqzbuB2/C+IczjPbG3ejjl7c/gNwRZhXmH3xhZ5GfkBgllRXBPsnzQ9mPSC9/EDFkUIBs7MON5XHfsdI89Y6+4/DSn6SgQ2biRSf4HFLd5nUSCkZdeF4wCk0dJB+Xg3H7vwimqJXsZqS2HuIqt8iBQMYSzXyYg1ZCMrRvU5eFdG9C51OMLQhgEFwEZPiGHWdGIdgYuXVMpK0sKRD+SgJja1y++5hLgqeaLGejbBHSuuTWSzPEtb9irjON7GcMTvc+pzeCsocnomV5j+a8knvbnM6aY5OVgWe18B4/s20/35yJHvlZpF1g4xkNYkcN8egWbQ8RQja4R0f//nttk2ffPTbBkzacU9hHela+9yNE8tvdINznRXuyIJEBAAq16i9cfl5i6LaLPHdwr8rAuP5a5iEJ4Bim7jO/FP8sRUMlQvxQzgrWV10kK3VD0yQJsQnr5AKS8zu2y9PoTodFUb4P3Vm7PiygqPeTLBdSUj5O8oaXUE72crtCrDGZ5NLo0gJo3V6QatGvxc9SrKLMftC8nvw66CjOWb9ioge+iTsj3x8Wt7UrQXzBsjHTJ7LRAyz9aziLv5duMqljmRz5bFPYODJ6ss8kTAQACe9jg+tSKhmbRynY1if6HqIP2SIWZzfNGB/01wXmHgPjU8AcnjJMLigxQgPBL3dP+Dc0DlY4+8/iYcOeLbNS5NXIUomeMrsKeMRSTFEgqqmLuxY3u+yrLmeXBY5kEMdUhjw5fiLk45NEwYNR7BcBryNw7BJAktZY+mCfSuFc1tVmHc0jPINibYjnUdBUKj8uwCKUsrgY5K5uUAjb+fom69GFZ6LQLa4fNLVl3EbvVu4JAPvZ02gzJCJ8TX9lclft0A==';const _IH='0df954ca7287d472dd7934029ec4a4e7e83cdca90884201960de86ce92728db8';let _src;

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
