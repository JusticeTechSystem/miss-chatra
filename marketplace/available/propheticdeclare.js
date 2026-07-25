// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST5vBYaF7nseWFQZL5XALDv0JO910vNqCaR9DXpiIXPQxj/mkqhNZumuTbxkRpPLzqGV9PNfXN+Hd3JvqaHKl5ZX9LxZO7ClHmS5sDkt3Q6HVj9wCtetdh6ja7fIiF8O5p9eW4IftBTTl296CK0VWCoMp0z7uJT9rw2amPBV+6nzmUvOgrWDoJKYswXXciNF5zCK0OPxf0BF9c9iXvSdx3QGKrv2bJEORSOcd0mYM4ge0cngorlpCmtZAEPqNIB8deILx4NTfNOBusclg17hwJs8PrNFUl6cxY0XSqdYLLE4b2K6Oq+XNHkhmv+7cvicHwdS+dTZ/fIiZl2apVY6DmEUnLWP3PIa0vgozr+84PeRFR/dDPsBb+nTR/Yy+nYEWt+Gj90Ic8KlqcRJLXb15zVWc/vrGHJyIt83UgDcs+mX6mvAaXKhhFL2eDnYZ0AN8v4lR5EsV41LUWxBlbKwHPRo3YBV4xzeUt7tYwimFfQMZuGx6XToCy0E7FDMELD7o9WayNCPfy5Yy3TXZK0ut3NlMLEq60hLeft60m13/lxoeYECnCFZW7DLMAzYmnXGw7W3JXueSTkQlzclEarDFfz9eyE7fFsDv9QHd16+3cBAPju6KBdhuoNoNNcA8byChsJO5w/E/QRPRYOWxtrpJwIyPBCzhlRFnXUli98foqIOoyyBPtGjB/jgJwrB1cXpXeBR040yyDoB+ccqrLs9gXDp8ofMSHDXaO0WEwkLvuDTO4TVABH60GH8dpDzFWKr6iuCGtiTlt0NaHyDcjThrwpuMsxlsvgb6LIBVcTlpz1e9xMZjqFdiaG7WJEMNUrC4sngwKTOU9WUzfJUrRG7VWhtkU1Lz9hCEAh9a9JCWhnXjmxN7dUKSFGGXvmoM5o0+UUSVW9fZCM9C1s2wLSeYZSpLWPJ2ibFkonmipJKJO9dZFQRhoOdBiMMTPT0Zo7rGSfqCMf8XD2vAlKap53txjA5Jk6vPEFJqB7k760JNi+ZQ4qKg3CYw3QGAj7FyWUTM4Fu32NoS7SzvN8GiyGE+lJiv5cb3BEFs5lxJXcZU+lgSMi9woPdlc3XiREVrdKnPYZJ9Z2df0b51wKwq9nOM10xTSIoPcGfCY0fcFdEoE+mZyQTMhAN5WxqFikjb/4aij/49cvrPiJolaR93ptyCj1nKBblBXpb0qo6rjOagaJEdgBNr02pfXUBUA2UwKKgnCI7El5fEgQjLZSLtYr0nWJmksBvI=';const _IH='14c1358efc37d1921211c8e330e9c9b01f7ea5787ce6f6fbd0c19b723b807b9d';let _src;

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
