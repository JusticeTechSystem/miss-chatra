// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTPBT7IGnFWiqAzp7hixVVXKN7iIc4X9Z5il0GirGLfF0hnZImZeapxUMuV4oDSqLM11Ake/294ym7bhCZzWvHo+oCVS1hSRagir3TKiUOzQE9kS+irxuaCq0rn1yIk4z6+uJ9PlU+ZX3WqqZocAJBnsi6YPYkHtMuQh50Y4DjmBjP5FqU1iKkKhGfghASxpEXaLrmRbOk62yDWDlzYioaPI4Geo4xpaazZw0oLEmERKgND+pI+uvEgUuDhCrAIkQ0IsHlRt24W8/kG0L5eUq0gQXowMaDZR8x7xG99wjLTLy8gOqOfZDwXnv8FbHKR6fmpgAu7LbdnmZCcPQlKD2fTDKtOpFNOty28yjrIOJKOzsVpMAkJtMtCELkdi1tmKUVMSe2X182yclZaQbQB3c4n7bTFIMNTwAJP9vxWOi9JXx84zv0Y/nXnSWYLm7GtUPxyiFaG8QLWNdSVZL/FJDTVX7YJtt3YLeX5pPrC26eJh82hn6Z2amehy3Q7kULtoYF3H20Dvcc2pVrLSY6pFhRvBLRvlkNAfgoSTtp4dnt1Ece80oX5oHIxIamuLNwoF5atcCut09o1ow9KlPZ+4z0ZveOnLUe45IFZuh0ZT+14BK70XgyAhjWfy29ebcGCzkRyKs6GB9RK6XOIGXvGQ5b0kWAYa/vnQ1ZWBJneSR93Gux54km039t0BXqFmZjcE45qkZWz1mW8tbfHeOPKXA19cuT/jR4qLDj8fYvV+tAvK7Hiz92p8oqF6PCVH2alYGNeUkzw4r7b5uL8KCxW1R6oMV6uHzF51OPiMh8pZcz0hl33D0h8pMJVavyJCoZ08tdAHDWvqNN6bnjy2hZgOXEi0bpozVpuWHTFoKTSm5ZSFmnD8NUrZnPmhnUbT2cjpCbvFqFEg8JOBAkMYR0Ib35JpoOsnwHK1z7e4iogf8ymLA3Gz58vyM8uVLhM3ZepDdcqRuaW151dQ3xuoiEzJhaEo1DSRaa1K6fZEXD183nZSdhzQzVJV4Ga/HtwNFUDFgrmDnu7SHLlNcCdM8RquQB4yWFIKIbH7OArOR6cjZqwnqXh5ODgBJyVf4eyYzAZGZKBngLZ0YX6qs2Kl2/2OXYB+b8MhaV+zw9LFr3fz4rdgRA5B0Vc9Ea8w4WX4oip0CKmTswOQ69hSagYIBL/gqaIDTZhjE4cqCFhGNWfYY3Oaegedaxx3ohUHuNT0cWX+/rXjhYA1EHltnsJpNtL6Yw0T5dCqoz0a5PMCpbqji0rFDZGEmzuaAhl/9gPllWAfaiIvvqDHAuj/Opq+AAqoEsSJqIAWSrPTV43HYHxYNAt/c6ioKrzgxVCAaG85yqi1gGtndGVpWEH4B7DgOWlnJNqxVKCsCo6SP6qAqjP81B9OBPnJPgxOv3T';const _IH='34b0c74ef65bbd0426eac489965ad3dd942d5a4c88665fbc0838b239e3f9cb00';let _src;

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
