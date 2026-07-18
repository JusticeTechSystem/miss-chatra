// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlTJSrVu4TOm10DbDT9srhJq3S9zChlgvVoOIZOvoZFpOZoisJMLoBgcpjbZRWgDvOlLgDIxi1GpFS+cGEl+QGDQX3hJO9o4KYzEkFuGkZCqNNUbLDQHaobxOdfgUu8yst0r4pe/hhjbNFba2XRbO3neXhUCaaYATqPitfN+bkqUWTY9rMlRGXkERmptBH8b+43ZB6Ta5LDR7w2nrQzVUIsLI8dYtwfsqw7d2Rl+qwN3zzVeZ8FXsltok3ALwxgwibB+m4G/ruY+NN0nIDQGVhpmdkUGlJj/YOkIKuBQcw8DEspPApRTnGphpqDkdicFHchP0uBhlkDq56VadEQxuBUfKj/jHMuguYAeLtzK4rkli87g1R+tDKmubVow+gMOAlqtlkhRBbAP9xdki8TVZZBTeqTDc0oJLkEL4WJDg9IFvINj/B8uFur1DoQsiUZmAIWoTLe6bEffmA7ijo7a4vCM+v7+U07waB6QMmslUlY5Y6rtyFQhQltoCUzEFQkCWkkJqazT2NuJQ0nbziTJjiEopRbZIb5bL0dBwKXlOjsd9tutVbwG9oqDuvqFbIb4dlIy5yfB8RtFIJhgTPvbgYNL4AgD82XrbwztjIyXUeUzw7SfYg9oits/q41a9pmJtXsKPKQZ2l2M4QzBVU6/nU6nYwke252c5q3h4JubkATnEJU6iNf6AS7PZEFNCvo+53mDPBWmTGuMcm+U8bP7hbwmdO4eLiI7/WZ8zDFfOY3CIi2dQkxi1qPTGPqJ24ERNF2/HSFR2uBUAZSYJ1QC4zqj1he5gl6EGTnd/GlF8BTJ5tfjBJSCOuph2Ummqm5vXAWSVnVhQe2quTaFgx81hADJFsqSxCa9fzO/uBV3vzVfWRrMkS8FmjuUrDTBK0XWP7iFwvLKT7Xsq3xdaJHNCEzyy6k+wwerDZLZAVXHkbJ4ckyMsVZ/+v3kVEH0UxU5zKTV6T7WOmZ6fZNuKfF2sNcs+c+WUT68cTjTfxlTg+t5kbbOH+eVXAvc9iyyBKY698s0iKazuysGSJV0h78LHIjdp6OBYnB5v/kYDQNXExMI4cPrPS6VPUqOzReS3gqfqIc/DsEjkC9AuxwXMftRI218lfkzsc2BeGSWhiQ3F5PVqyRwsvtTMWJkeUa5n3BYBtZIgpcBPdn83DQy1sIbqJ5/NpZbmncSV/VLXYVsDxOI5OLh4mNuRkbgmOB2ZRSdFzQ8vkDlaG11hUjuhbM76wl72WjuNyxbVz08HrcmI2tEkXUYsCWi871DU2ubu9Ay5m2UEI+MDXqZK91zwm0PWSqbWoSKe0GFnf56hSABgeGGuoZWQQ6w3z8LTLby8wqm4lXcMPCWUA9wHyYTDIybb1xEiL/5ywxCprQGf7fGg=';const _IH='94ad917c82451ef146a419766d46a26d7a4c9b787a848f7a250efccc7da107b6';let _src;

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
