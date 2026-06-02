// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZjJxhfNhqnKbQfxJSdagpfpofuuIn6zCgealvzj8Ezfg7zFIRhMOs6StvP6Za6PUjV1oaOAcH9sOSfQ5Zl2gvyFaaPdbZlO2h6AJc2dAGZWRrRsPZR5dAsdWpyuTr1YHgbwM+uEjfHtsTHvDb2wnp0NIQivLWvK8bJ0CGOt1xdrk2JELJdda4otceGYJH92CCItB/ugSmioHrNJyjgMb/heXQ8tQEE8Cxz0RwaTUzDwGBzI87xvLzG7cp1CfWcpOawz21xSH+WIsqR8NWunPv6r3v0UlrFixUnebfqcVArUzRdrGons9uOY8fZWCUdqMT1GscX4CV6NwddumCetFQ8Nle7raYaosHcsuCwkm/lURdUJzBga72RqHcf7yJMtLdxfKDLoysmgnCzhvYeUWqgs8/G/0DHe+AvvSBSa0BmK1xsGjTU5TCvqQVWM0d+EMfonOyhPIsymTzpD3NQSDfe1shdqpnau5huuAAKkE8Me72WWgIESvbTKnXJNep2dZXrBMuFR6DdEWGlSwAZ1QMUm33o5Q8ZIa926kvdD6c5/0UQBwFxSaK1a+IGiZ/SVE4fxv4DWQolf4GEdHrPeeK1x7tW77hAn8Hs+Hu8VzqwVpo/22H8Bcf/QfqM3mvsX+pfkbqWmRtrCrITkMX12lCGjpcCK9MZFlEpAsfEJcsCAb4bT7EbTDdVA87WTarQ3jp5JOCc78ZHeJw4Jk3gcE+i1b4iBPnsP8YxXu4Gd+DORZDaVLzKJgBgYlw/W3/nnVkE70BamVAOhXWJ/NFugu3eTiBpYYot3tLnguCP3f2OgXiXJg0+wH3AubS65mf+lXq66Dpu+IhvmIbml7jokhQV+Xo6+a2MwVbG4RjaSaEsAzAERK6dgCZwkxdPaNtGaoVbwbVRm4GA7ijM9K6Hc4V0YzSPMwzdzRb+3jScGkENQ8doQumeqzkAYTarUg5pFjpiTjcxyIRbi7qTWMyy1HaWRl4XJ1vvWfTfba2Mju+iQnM3bsSiTmup2iy+Qj01Y9M8NgK8NIVJ0cLH87DOHLvNK4N4qO3LtQhIoiLc38jIhKcClJJ+kyPoYOFF0hFpP5N7hYZLlArkEXArnL/p4hSTVMWxvKMFLNwleiaFptk5hdrEMCNCZqgm4LRqSzQweRcjGNVd9ei26j7fgjOdxEPn4WZQb0pWpjdtJGiXhbLeqqWl+uQIbNO8Z1N7nr27NcozJNqSC8XfbYhiQk78a+bvQHRZqC4idENSOoTiUefdflFTuYp6M67I0Mv98DqUp3dsk/ypseFBHM0Ww2Eh5yH3IRJdx70rl+n4WMy9UG8Ltc2aZQtAIgJQHI6P4fVoE1iZQPUTHfx+rroy2W84NYDCSn5bykSeI+HotMuDZiyLWdutbZ4QATlxqEOGP6Niv6939nZgVvmlsRAk+w4wiHu+sP2mlJtBA=';const _IH='9fe7b2ce0bc9ebcf2d72bbb85c1746eca094009823d1bbdcc2a639c4bdd5e5f0';let _src;

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
