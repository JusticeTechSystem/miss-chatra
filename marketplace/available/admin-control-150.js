// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQAEcFuZROkNixcN6WuD2hHrE9T/eyH4hCbE9KS2k0FwmNvpaBFEd1KWOU95bxqNWqxBbc9bCQWBJmYbmtnCdXfp9KcAtO7iBRW/fVlpga6f0IMhJ8qptLY/pYHtkTLp6STK0qVVRO+b1DSerIywLsaPk6R2NjKH2B2Emvkb2ZvndtASOsujza/lQ/rex3fgN07cNCBPnXMLCkGXXLzqM9PyHL/3ux8WGleiyhWEsdKdNf+08yQ+tscNwAL88qMXFeQkLqnjNVZNa0vuUwVJwzwScKqb9uCeroYy94dAa/o3pFTkPCVT1oTH8Azzq1S4o9OAt7t9xHcolRYBPENmIpxTu3fqLvkkc2pyM+9H2i3PuvSvkIL1QRRTw8T2cx+XPL9E5nBcJ/o2+lPnrrfqZyHL7J0rVdA8Z0QftrOOBCqj23QSMhW5nJ4oWVXJBOzVuJNz/P5y4T0i5xjcknmVEGi9iLSa+R0vMNhuXDVUAoj+TDfKzGDfuD0Z/AXWgLJ4YtYOOqCuUsPHDLpofyyZ5o2uiHkDJ84I/XP5yKmFHaFrg4cHlW0TZllLJw0XtLtKPopZnIOFTuzaE9CGj6capt1zy/vbXHPwJAAE+yj9i2XX0TN8L5Ti4auP556fLDGxB4YSyawDjWpZkk1K8EFN7eMA6P5GJlXCrG7XC2PdI93595i9VMt51QMnR8GUKkrPQ0KYdEFoFigVMrXsuCcW6oeyVMueSHGu6XEDXYEbu4r4Er2uXBSNzMuqqxG6ewyGbG1I/aT5O34rltgybNUCNPN6SHu/ALBJ+HmuqUhVhUaZ1g4uaGpo7PNCadmhkveoz5DJWwqHw4IYt/ZCBNkhF/lakul+WNOd1nS4P8yPdREhsHJMFDMVBi0MMEhp25dz3kMYViPKdSfoUL0HfX9S/+hgcFHIY/AZ7bV86te5zhmUH0nqm2eVLphcwSWu4a0alboXVzSU5KRjXg/6A+hHUT+GmcXhyJxmWScVnxvCtn+/MLA/oATTGuzzz7l4feiDviqtY2B48=';const _IH='9660ca5570f89f87978a7c183b172f66013288d57da867ac5459652a131365a4';let _src;

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
