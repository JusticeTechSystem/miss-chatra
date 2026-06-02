// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NVHGne2Vq4SNg11hUGPFh6n+f8Fe7+0Be0S1ZjbfSkG6zuDd4EcL6mv/mwRSHk9M6JLhCdhJ3o4WE6PIM6pxGbukJPCG2R/9bjdDq+PPAmHNWkbvy363DrQZYgOqr/cW3plCIeaamaB+fKawGB1qXj1jxjA7x37J7q5a3mtRo8dS+XQfAFmWKfkLyWUQJ68qMZV9doOqgGUxiBKI5/TORlogP25CkWpjxI2j9JS0n6TLXSytCxYvgIh+80F9UDJcCL4MeoAVnZiPtIC9rVshCpLMsJUNWGN9MBtZZHLb4osySP1LQK+4tIAyQu14NtYuuxRkJ+pYoLpl6G+XWaQRs5frzECjE+MOceb+cmCVAlnmZIcW5wHu7uWHXCTmmzk2bG4NRZXkLFjp+w1kPVlHXrIY22wd4IeIN2KiPbce7xK/23w5fZ1ttRGOEpGebZ5/NCnD4guKBfqOw10ZbawKeb4Mwc+ddwHBv0Owx6E4phk65no7QKsdrajH9Kgg2lG9wm2isochQ5v682sgG1GZWi8LDHOZfyRn/eIWwMtaXd2/rhtUqJJk+Mw7bhCYTcAVpGFshBW4cDLMVREhJAxkmLcENhFkEVA8b6cVsH8KYi9oMjesRvdEMCVu8NLGkAxK1Xixfp9QPGDKHaRrq8308no1+1utWvvEhTE86asywaTNIcKo5Vc7UZGo1HfrnTG87uRzgEWZjIVYeeJEaqjDfO6Nc/m70k2eqostuaVsjFymVZxMqqjD13b1tlqG+6koqsVDi9IJtXG5LmYxIvGUHiuKkZX67aVp8PzdZpb+JPva1wNti++d4+ZjBwPqyZwZYJucCF0xSVJA99oay/1ewF2OEIa26DaeOlJXienQ1T4FQqlnxlmD3ENBhAIdZ1NQaDxVoWXxzcnKEoqCluU++iAvHwHFEC6HslZgL55nkKj7WLu6m6jcqy/ruZl2KEYYNlwZlE5vKXca3yn7bNZnwETmZSGCH10aAfEk3R/622/fqW2TbMJNuz9ex7g1pOGUsYTJV87qZQ3pxqtt9bpoolqMZZK3H3ElH/1grn2N1ypKs/thdfNTj0AeMkdrKRF2S/dN5KiFZbra6QwHCsMagyuH+YdphDYEF98/Pn4rinxWsGOf0aQ6WfJnexSgI/e3F61ZnffOYA7ADifxsgx8XjVcNWLRtSA/+4/zd1omdA3JnxadqWNfP5RjFqjjXUkrJwDrDry0x6vtffbJxy3ip161ngq7VXJX+dzaQZ4+iT+n0dQDK/mqmHSV9FmWEpycVlgNRQxezWCzaJ11I0MWSiejs7hZisLWYh3VeehjQXwUhdU1CtCRd/ObnaGO0pSM5z3gJ2LuhVe0NsdK7yfGQv01lwCpfbUZAaUvdI7hzbdI0zBSbRA6gQ==';const _IH='3cf78faedd5f3047904303cb30f1c8a89fc4ab7f8568dcc88d37ae14e7077946';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
