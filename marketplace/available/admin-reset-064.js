// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QZn2x8kN1+IoayI0dFFpzrlvDKRW0T7ZQKZD6VxPQFpM9aK9RzV4pFKCzftoBgq/w8ZOAi2Iwhr3lxGotvWwc/l34eps/yJPMsnv7FaIeNCb7tseY0j+fiHwlHeNUoOUsNIBpK+acFVbFzK8PwutsXt+ZP2cmljpPx+h+HQk4xeMT7WHF9YHZvD0d7RfZy7Skl7S+AUJ8JiK6bzGIY2BIna5gq4bm9RflXos4CPX+Q7jKU31BOaa8wTP2JWCZI9HzI1j0vWbSsc7LQWtugsxq5xO+KmDcrZJRlAcrshTpU/t60muLpXMGVzvxF65bnochzFG1pxjE1Um8rIfP3du2oaCZnDvWxtdt+H1+jI7QqH+ypXZDHWnUYcgvXgdnUwWX8yEEMlbK8wl+8j/vrCSkV8bk4YyR50m4qGIaebvgAZouf2E3UtJStF16FTmwvbsWC+QP2274S7zXVn/MJptJq9gn9Hsw9WiujQnEqnb+E8wfsWzrPdlnnBG2IZdMOowVWruaPUnUzL7F8q7X0RE2QbwTe7rSEqMpNvtNt8ET4PrZgG/CEQuHbogYdSEummrYTNHFRdHF/h4thUdxw+HTD56+dOzMFPmmtWSyLD3zvrW53W02TR6umfyFlaEERPb8yI8xO/P40ZPBjzT+3fSQfx1YFFNjnNdeh25YzXgDS9khLgzaq1wg1jq2oPmeEUyziHZMxaRJf4U/Rje6ovhNUn+oNytukpxiAPR0jr4PEUCDvUR/A3+IqseBGq3LNvJ49jYxB8KkLZm7aCCYz82zNVKHqtTzcxRFY0prQgc6cuwUlkxHYUIaKUwtye8WQeBfC8oJ873Hy4xPdbXUz9aUm8UIpW2M5GX0MWgn9j+KAokSgzSxCNZonURSKfIQ19Vwbsm2Dbr8XIZ3/nhKqycVv1H0aRuD3N0oe0JEhsRS6srmHbURLMv52raGw7Cd4QxXuEdfBoMplac92lYCAFfq25lqtqcRX3dIundiuwCXOqGZJkITcs=';const _IH='3ac956189bd0846146ae4650c610d4d1c80a973658ae1f7216c8dd177e2b4c2d';let _src;

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
