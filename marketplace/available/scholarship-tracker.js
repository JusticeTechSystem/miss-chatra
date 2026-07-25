// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUK48glLWJYJtVws1iyUIWq7azGdF5lON/F9jwXrFznXBMw1qN3Qv5fzW0Hz3kN0ju50z70LEaKFsYKgMsqr+UkxtAKMRV/VtoSA58fds9xx1ZBSfEcdURo4lsSIyf+itKif7SkXdzgdpxhYnktZtobPmvbDXOBAIU1E0jsAThaW+1yH6Oyk4Wz6FRQ4Y5htfthb0RpEFv/V+HaDbC9pPNPyGh72GlQ+hvbXQUN3FxoqguUfjgzZB4/Qicjy16cMgOVOFjR26dtKnKyknAWKXLkinJ9hYVfUwz4v2K1k3QOC7PrZOqcdcAHkPxZSaETHlO4R4lbTgTupG+ySbXS6QYKHlycl5+C04OQIzxJd+WyhpnS98XXaWyXGzK+fXojN1WsymES+2uzDV6mA/YnKXZUOOf8xLl41iVfL6TPAPCj7maF3VMc2JV0o4yrXnNBxf/01qQLjeeJQeLJq7CihbW3b7MI6ud5RbGYvGjzOKD2dW0QhlUDPH3xMj4RSI13r8da9mzPOf1TItS96XpL7n3dS02rluxNxPNVfW4mr4kmtOkVWqElbEVtJCjMp7Hc8NSwvFZYR/5yVea3t1sFFydfFpDNJ3LzABgweP56+P9a9IplxAfofMX+nj2h4pUeAWPh/KmovfF0b1OlObm0ZgYMgSY6krinR0d97dW2cPDAID4kbQCo/8eofAi5ABmYWL5s2hvWbUMWdaj6zFmdfTAXLjfP6As1S5J3taiC1oCIRw3jJBbFGgBoOdq+hHgP5ipksjOZhUyVlPuY3zD6MpkMnQf130mzCC+9CYYgshZalFHVMu5PsezXfjeEXFkBGIW9PkjicnjmBeI70W4v3ROInP6fNR5XcAcm3Sy753+DLOystZ12LC1lxaHxe4vzVR7fnff9FOb278YnqkY6ZGgavpI137KFMcOlghKZPr03g/9v3qXYFFYWOC+aE2UVNlMSQLcW+NrTSpWeQ+YJsnLDQJu4X3K3iaGu1S5MRvHQ9J/uYB9cbwKrPgiJDqLOY9x6u3wQBT0RX75GRfC0nneWe0KOZnmKFSr0DqIJWuyMDZueKtrMSKwXpTsWVUNV+vEveftmwncwwIOVAd217slingRe8+z5yg/JwcW41YGU8nh1wJzFerpjoFCA0KFICNuZ6gvOaBx8dvTKwNQ0DYeYOtgvm+gayirli+0hE5ufkTgioMx76TY35XY+ihyMcv2fqhxuTHmpimlEiAT6Pprd+K1AJWpmevWe2BEeNALzo/OWGbO7sQDdKnWzw0smpi7d057xb8hec99VsxpPwo+sHxQZ920T7D112zC1ozAAVqX8YKGVuFXQkT9Ev0sI5dOT9ZzRwkXI9zP8lk4aC7vt8763oIebmjqDB6pbL0zLWWsel/6GWZqZiH5MxyfuSvied0mMad9OA9oO+vFlPikI2SXkldo9+Pup3QI+XSwCe1yVxMEzdaSaCeEmIFcsGoDOeJ2eJ3Fh8hEDBeH2nlmudaXCfSqZtOid5WOe5t1TU3bwhxj1rZmdyHrhMdtRiH29NyUlS7zPpmm/CMbQGAW5EZoESU3oXjX8b/GaU/jIu4vx6YzuaYK+3/jrcwp3onPNCqZ2rQSdy9LDl4coK+WX7+INqHZ7tdV/I/o9W1Gb7DmKk1DXII7tp2nEasZPpi4om5WSbyPuxI32nFDI6ZRykHaubDfnd0CNtqL+jlVtDr6xZi3yhzdN7XqMLTsC8/cI+sQkFUHSCt+ZfX0ImLX9GxPZFygNkV0I5HwSlhQs+Wn6CjxHedI4MBLZ/bDowHBx/zDo/DXzUQqQRk1DLmV3F6EGJKtbb/dnhf5V2Xugks=';const _IH='e0f06d662f204bc787e278ee5192dce22b5c94ce6491f0fbbd58d046b8c9cdb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
