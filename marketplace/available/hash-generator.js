// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zLE/WofflXZHbqxdNg6Ngc/IoATmd3FIPP96Lkjj4sVaBZ0mYMwfrUVSM9NPIkBufPIpOo9v/bJVWUJ2KxKZ8um3IgyInsVhHJ3yavVQ8O0+rJm7FSjKEbs0k9IVryqhz4ZPkwCGvvzUkfootNliMps4HaC/ert+m924UxuzP7PblsKtkGg+KFvRUETG2fqPQ1rKCRrDyPf0AvYiXwSNLAWz+uwl1VIsMiKhT0q7l+mJhOsa8fb2SWemLGjNJZRBGC4sl4Yce6Qy4IG7UR5aXPMtNhcMJGJ2ttEZtkF8t9AB5lHBoYuNl4LCOtbPdjUCOA7MxYQG03fhtnVIUVdCvfdvlEo3OzwreYu7PfKgLlsgtUL7r9zvBm+0S+Vcknk7Xedu0f55mxfzldMd+E+3LKw+8xNH1G6gckd+esd7ls20Xq7Rk+zXAMRFZndlTiatBOzDOkivS8ftD21Oq7Bvlv0oL4HQMzWs1ZP0eXU8KprsTVIR6AZJ6HqFCGXJp8JHFsRERZdptrC1TdCOTs2p3BLKtvQzwShz9rJdl2zdyDDix7BiarSXVG17Zi8p/88H4DCJHRIv/oR7H4bLryd9pbFBXblFGoCztVfXZ+Pw62eBeKh4fI/YdlCL0j4ABMtjfjoifT6m+RtC/fRgf8MLpOwEWUf/SUkTvVe6Ky9lYIsHLtxeJG6PEOrlTVoGEc/Y5bOLNWoY8ruE/fQtWdbAArfMXo/Sx+FPN39RhCIQomyoeEyCYC8h0sctppHI8Kpo7FpydIPTUkYe/4qxuUIhZ57uNwe1ICwV8JnXxlIm0KeqeWoQ280Z3BN9d+GPFMvr6iYX7kyaADNQREUaWqiKXGGYSiiyfy784U1S3Q+gxS9iFJ28UKASHKtOco2HY0QZ0zVH0WnB4HpQzNc/GfSrfB6ydXP7VGsh/90LpGhK/3+G3d8prb35WC4qHGsP1tapjUTKRHwKRaZwO+mNj8nYAjULrK0gr+KEGph1tlHruuZL4IFLhxTXaQ325yczlB7mX5YhOtEjp7JSx/hAbVDJlFeUiWLBFBXGge0El9P3GrZ5KX6h3q1dm11qqi+XHKmnEzC/7dy6WqI+ZYvMCPW+8agfJO7L5WPvgx5t74ZDUPWrzNGXFkkDgqryVPzQlDnh3baa1j96rqvaa/D/8AEJO4xyI51x2Z3La8LBLAwAZDhtKMhYQMykljSqoQvzokateQF4LD4RXxSPeCAMgPDmm1UtTwOM6RBnFsi/GjYLWLUSXNRnRRYNYHjISi1yqXPvWMgPYDTAKSQ6Oo2c8+/KF5uDJxkmqlel+C6LDiZjDrn34xmBvXmTeitcgO2rY6NgRx7bKTkUFlkMOcdADZWHnUCIxWSWFBwefw3XR6fqLwsFlmkiHuKcr5s6Cn+DuAR+r0TaU3QpcTYnqLsiskTpegEIn2QVAh2v4I+W1kvowalKbvvBNJtk+Ovk8r/sIy1bYoK4i9B1DGTzo1BUtTPDtGvS33sUefSQCoQ4gTzRrTZrMnRkjnV+CMaiW8padzy5JLwzCvEAfwMsQdDADhnAQmnDUhkGQfPPsFq7HRnDIe0atnCXycIVLzfyxPs3XdDvJR4KTJC9BFiwa52jFT8A57MuUobDeepyPg==';const _IH='193c4bfca8469230fd69a83342e774942df17c2e828a2f5ae0e63ad8e6e38954';let _src;

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
