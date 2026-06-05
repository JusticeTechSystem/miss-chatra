// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PoKyecldNGr2u8nTsZYwjncyUw5ombBVLEjGPVTrRGg2qqBbKlSVGAho3yTe9GXAfj4ezdvLA/2vChR96xRsmXWkxeHzhv3368HmOKPSeHofKL+queQ20LXUh7jR56H9oTGo9KRfIDxpkxVyPfjgdYij+X+1ybT4svhfUCN1dljESpivA6sGTMeZlI4pzSP5T1jHwQgMPatzRpp4JS/4k1uPZzdMrzD2HUFzRe8FtXDdFLz3xDIVY2oDo9X+48yKJWqZyMOqOOkbUPlCgWFW4jPBanozW1H70UrxqvitgSgPN3VSRjSva8zzbknB2zVFXwVWlCHrH6qtSza7HoL7zOORzTDBSs45eX0mghBajz+C0S3nwEs85TboalsZczi/pksBOxBL73fbfFPuH3zBASOn8dN4ZgG5UgXZ2ufNx0YlUIZcztvrfk87oZ9b7mD6xGFwQfiCtrzBROnQ78Ii/hcQ2d1/Ilw3nhwEp9ZzQ6jxVLw5VS3/qRgvSCkl+fJR2MSTEZ2WZiMNnC6wn6jumUlxyMix1gTNJMHJhn4LCrKu8lgngaXuirqBIrWUDddX0kOR/JWaTG0EKUcrJs5EJ8Xwk4pbzLmJpTJ/8u7zPw0e6P1GggxFk6KK5NZdwobqi3k0WOMC37pIQ1rpHMen7cZJs4m0xomis9Sn3YsOEobFnOBrP81UPDN1xJcgZuwlHQ8LVJW8eiMIXM1z4JAGOWFSxvl4ACWHwjH9yPBU+kgEWvPfpGftayQNiNwdXqTpDOzTu/v2avnGGJzX5p3Iy/2NEWD6vJWDTv10cumT50cNVNf1fHKw+/uC+IXPkMdEdxSTyWvn/ekmATq+8jmZtm8+A/8gm4nZz4u13urW2sy4UTj7XPpxXbWvbmPi7oWL6T+CsbO8Fb1227lfrCGRwNJK4h0UQZ+QZ7LFdP9f664fA8viVF6DYL9FwCXgdYGpaAbeGgYMEcX6WbH+O2dPpr5MelHZXMq5T5dlJ3mNWRJREiiHUgoPbrq/xiv0SA9I6I0vpSRjSbFzI/02zv8empdBSbhafvd0GDLdTR/7kbpSSt9T7zvFnTyprmDtIsT8PJJQDH2gjHuxjm9mnXgoleT8gvHSXb4NnQbhRAhbPwrXVbE9CFDlREVb7H9WPO7gkCe+8sRbhTo41ow5n7slxtczlZn0w0rxIv+xFfgZBu0PVH0PaglxeVrhRHlUQa0VyQArd2iQcUAcWiGLPjZCl/a555GtTn8VgR1ysOhZGSzQISiUTYRovXerTyrD8OoWz24xVBgspwVSz2zUidu/AOJcFwIbDKts44DrGdpNKafWYuygQtfKsptKLOBU1VHrTe3MXST1WfmQNq+HzkE+u1tryTk77VWsUz2wK1K4a0lROd/YsYNnHKEdfGKjEe69ZuI=';const _IH='a65d0cfd8249e180cdf394fa4eb755b08a6c021726b1a282a58867848d3047b9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
