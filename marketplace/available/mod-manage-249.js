// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XYE2ikaSttviXRi4SGjNNmWi6RZBsadMGBJI5KpGFymoIkBR1iEqxRy5kX3um63YTPC5UJqNuvdkggg+Y41UiT6GtThXyqE7pRedqRKAuMod83uTPSUmX5CHNlCAImxcoU6HRtvRPrNCvWsHX1YaByGFEs7Tz7VN+wxmW2WRkrRI7ZxvMPT4Wwx6yVBvbfGAsI+VsNsWKCt0qwj0nahsx0bO9XPAYN4/SscVR4FuTnSCfUPTQ1rhXS6Cj8oNwJtLN54w6Ep0hGDwqem39tLZaOeUl2a297FNL351fRa84I+l3CPPFz6hWGhzq+aoWhDWMyrMZENk+/qLIOhZ/JIakNOp7d4FXMZxvQoKSZ1XwWrdGqUWRZHdb/rfRFNtNRH6PZkuCQC2wcGyP7stOTiGO9KdMsseHudqiJ5DfsTFB4f/Dh6a8DCRfVbEoPVS/LA5OZFyvdUn2zoUHtxSNKbKZgqtKu4s/H/v2OuZe4mj+zDAQ/92etSy9py8Xe6A+IhQEAoql5/M84nMUrgyrJL4cntd0JQqWpQoavBMs7RNSvePXxiLZQs7EJ5kZ2+GXUSaRn73GtzOonyBmI+1iybIcID88bFtXGtq+blgBNYGA/RQ4r3aSX7/YfzMwS+vZeJvOn2A/VIPR5XaatdaCfNGgEKAYgF58afHyOvD/fcIA2Yh1OjQlFDP0xA4l0H2uE3naYmwtb+Fh1OiXQnPWMM0VtfcjDoiV51+u+MFRaF7sKZyw4Mzt8iYFXD0wSbn0TDJphcqg7lX2f/xPrHmP1ppWCZpdEkLhcj7o+AXLba4mkB4ZcKrvMWFhFGUwbCBbR2n/UcGOr32/oBnENrCK+r4VFy16dg8ikkVxEwANjTFbc+A60vLVT9A8JYJJDYA7WE2DHIpC33bFnysRJ6t9RlDA717Eo/nJGV6YC4WEy4oHndYIsrmOgz3Rj7dM25m70XhVxz/3y7CnhB+3BOCbVs0G94LTW0rNODfEpKdTaeByXSWOQOywXfTKb8CJtev5lTeqs8WrdNDt5QwEAZWdkfGY8E+BpHxBTjFVfQeqKxGwTMc6/ISgteG/9si/Kfi2exz1p7q3XOkIDPXfVDUFHy5iMGY2gAbZdslz66Z0hh6w4KOirhlhjla2HXwKs9VhP7mnyr5HNA+JvWq35+2eKEcJFE5+n8OE8uS/oIzTM6cHeI4MIaKYfLfrXWOk4EPMqz7srD+nk7klo8Jq0lm3IqRpOvbz1qC+FDvcCtBU+WBWjtupNx+teJIr/4OXPNswuYfA6TiMUaxZose7FfoqArg4BOWksjqh9eIv/RennXy6XgChosDFNl1ZRtvKAvSyamYJ48OGNoIOA1LBBWT6u3TjoOp6lSKMn7JymKIx+nFk4YXcEtbYLivHg==';const _IH='3a59a34503e181936faceea8daed87c4d0ed78a106b9c3ddcd191538503cc34c';let _src;

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
