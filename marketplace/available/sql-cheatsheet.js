// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x07OruBfVR6CzZ1/m2x5fdXxH9BTDi0nhpIdCLre50IKXJvZ+585vzSC0Nghw6ugRDuBrVqcvpeiK3AMbkR/KV5ihyQ1OC0i5nL9QQKmEsz+55DCPKtx8k6VvTbBxPwFupCTabQ/1LjnsCCBg3nfh4OmXct2bZMAvGoJ65PUrDtDcba1nxuP0mhx2/uw6QHl+zcPLa9PVB4gBwBStuNVECPM9K00oFACIOoycse2OqmB1bsb1E9aFghq+Lv/d+RE3onjvEy8xencNh63vfxfK0Ayxq9KwAqUt5AstnE3vJh7PyZAlsFW2FxBlzPTJKf2d4OmpCiDgEfr4Mc2iVr+Sg1AxDJvcI2wETfQckzke6yw1zEKYe45t6HzcJo0tu6XVvPbcGRnpCaQlVIQpHk18Is097+YzgcHVMS8H3is3THOAXmCdmm9l8vAMru/kusXCAfdeFS6q+LVuhFIq6+ruZHsdH2+VXtk3Aek0WoBNq9yfC6Eg/cq3NKaN/dnom25EXoQX1DHbqb3FoiQPh7RlbofVAcYfNFw8DdDOiOWQEDuygi4P0ufVRyFsHojsZz+MRYxPruAABib/VcjU6UDxhgK0Mygt0Zvkkw4o442AXNAzYcskoPRAwOjwIdNPRiUNdQvGVjyNWleIa81FCB5cmVJNudUm4KHuzR2Nzj28zK/C3dygE8+aYE43mcxwLLON4eZOQlJloh1lu8uM1RMQgP2UOHolcbs/bB8cKTtRAqA9MpYwLt6f2Fqi2yoFitvOTwM7fAnE6p45HbEZw8Wn2lF1j2FsntSeeGxu57jmSpv2tNBbDsd906dt9PTMrhqa1iwAYDqXW4prcFVH/0GqSSyaq+Nt1AYbFrLKAo7an4EaPT7oTkW+LrARsJE/HUmTeKPao8sCMT8bowalhB2QKfWw+hyi9m245cerEibGR2SicQuxFfvgubmH4waZWMXbdcIi+mLCkh+CcA+/GZvPDR/jdLHLSVMX09nDWYuotoB2ENzDAV3KZKdtkO1WFwrY01sUY9EwAQvzOvV1PJ4FdIMjZoNlUDpLkYwDg4YU4sE0AL/tDNMfJXlbH+yMzL41Q5C7rhRZbm2DrQPg/zDv4DDu9GbAjpNeV9FwnlsFL0I+furaCuCoet5eFSZN/Fa23XLUdCEIAp8TOmDc/kRrdzMGBbxwWLgJpgncFZtVz9AaC9PwVCaAjO1hLE642kksmwMlF0UJwoTTBm1p84FPZLoEmliK5k8UTTDpdITEAOAvNWTJaBejX2fCAtrZogPK9DaQ0y/h+o4QJUU9Tr8CYU2CBJdEFZ/LIHo2UPQdzr4VqE60jXl9XvlaSS8efu4qOwmH4XM7wy4/5jMWz2fP68aKSggIniJqIgqqPcOETXxTpJGlEKBy7+JnofFwNMJtqj28PD1U9amyxS5gAZ7QtBUU4Bdg4lsOOiGwE1b9MFz3Cxy30COVV3M2XF/M9O4qcIuODX89xFggsWoiSepd7/Z7jqCMr/06LppQEuX8QNj30mTOfZt4uOVGss5mrqnzR6zv6wg9XX1caV64GPe/BvPKKowxJQj95mPp/TFNCRn01rDNVh/ZS8FVTX8cr0vAOtYXN2Dz220YWkqRBqL1JoexIw1ODnInUd5otbFlkEp0+6bAs8YaZJnerXs2M8jQe0//JPKWMtWfEGzELLDnnFu2BjbXri6cd5ew4/08c+OqU/6qHa5WxvB1Wa2flpWqj1qfT8eWHp/l8K7Av+IyIcCAoZL/Z6Vkd2RLMVINP/NCzHb/d4eQDoIm0ceNaZed9vywyfikHg=';const _IH='10621a6c7bc4cc35d79bba533d71a5bd4949908b88607be1c5748eb9a4abead1';let _src;

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
