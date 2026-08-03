// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQT4g+28vgLjgo1BbzzZUjFNVkogOQCO7DvKinZX1qmDhwdg0gPX1xZ7xDpHCWjQWngUIAJsFBNM2sC5ITTwQXqjgD49+7dziDr/gtZw+6az1BqEZYh6iJJt8RqDWCebquWGUIhvLCTjsVCJSNADTdwZpzEy3Xrz/krI2mLtufoOiMwO293+9jKBNvt8YSfzdrN1Ev5rGTBS3cVSav9Gy6oaF5xiaSLOFmk5SqzzSOkL+Ff5PG2eEXqQORJw9DX95Hexgn/+soAMUl+bFSoSEuPEOq5BDcpJlPPC9Kzkhg7bpJVYL1ABmhViTESRbiaEm9Dow7mDOKGRUXAQDZuK6KBxS5uvgHiebMMIVvslEEbqybgianosCRwwIkow9Njw+pulRhOx3532Te7NAwRpWvU0gQcjbaHHQ1b2U5XvTnIGbah+ODF2wlZqjLjnESPDJ7AxfbbCLMOW2pB23y4nOzDwuSFDt+1k/bhBVhB5vrpF9zajuzNUQ9YVw/zdIhVtJgujImcGT5OdKkY7Dsz1tDOgyYe+G0PmTCzFsXsHreY/qNJ/eSqXR5qPPR8Di1zoQh+Mk4Q+uCGb314ezKcEvy01+9cH9hr8LVm/cDiYKEtDuEnmsUIFumM61MAkUMge89Dsz+k0AU0UHgHfFp5tsb2vGKRpnm5fsV4F9JJS8OWNilIRYr798ODpSxNOAjzsxM6PM3mIMCsPenxGSG0lzBvuvpJI2YFXsHeokcYBUgtO846282yAIq5MhcX+W9cWWzLqUSTBckXdnf5aUafDn4cNxW5oiE1uF2lFdk/EK/VrIZWRS58Z2rumkWd9DZO9qzCPtBZ5FfiWiMkr98vc2CGQwcIVXtsvduP1bRtg4jGAelqwyjysmW5oG0WWxTXYPQzJsqRgUDcpYZIJG77Ch3Y9J42jWPaiHyJjObvo/o2eIkY4OvynqmnGlWj/tA66JN1SLsDv80dazBmpcillXkiZB7qXFQDmeH0j5y0AtOo76vW3x/ppKkh3hMKt6z0bKGEtVcZ2zg4MQGC3ur7Mc2FEnGjxh7Ny2LMAzds7rXdDo4SMMFs+UMNGz9Of4MSvfw6FjwWhb7/jt4P2xu/qkiKE807+aMATBdERaw3+vJS9Xcb2MZ0kZ4ZWODJpQ4N9cGtNvs8c2MPW6GrDUdBx/z2Vxq/Yef7YtzFg2EFpBeL4afv8oEhgsq3uCECQnAj7pfmLXf4FwawJGYzCP6bHweKKRAFpNx5t9EkK9vcXAH+gjgaNpqITrdJEIjcDBIl02ir50h9SJPqRhFqBANcVG7mYQ/x35JbOg0ZoXNVYQd146/6zmUUaDZvBlkfwV8X8Ug2R15I6MMGCoU7QlorD1Gohbgp1cYwK9ZI1NUXowbFLobGbm6';const _IH='e5c64721155937518b098b253b7905ec72b18a09c1d511c319c5592be482e2bc';let _src;

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
