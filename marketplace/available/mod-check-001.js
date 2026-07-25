// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROurW2J2y/QNXTUMXyuFN3dB8TuX6abJkMdc+TvG8WqrWGMgn9ytVmHz5FobwKeqXg232JVa3kr2jlLw/SQeNEpdgV1Lkd5P3MLjzxvZPbtPS7k0GpUZUIrjrIS1VBH5K/OomhFYzwsCz5NU2i9PplAdKTci4LnEahLPhXSyFbjuyDfTljtGGsMLyrmJcr29zthTEiRrUkPZgvkd3vRgiXUFOTsLQX1Ug4I/mlCTqsCZc0ZpbdH+/ZjnvIbfpI9rSD4x8CExXj1IAF+5N7409o1/i6BIf9MBoMD673C7+VFfCl3Tyu55kdX+yaItNilwo8e4ZFRJeGrTSY1Sf+Z96XbPAX6ME5jgAyfY1znA3Tk11yw5lktPfSZmQ60LBx1HFaWi+oQK+eM2PPIHNmJ0/oYSHhzVgAbL+mWWldNXsoId2hoJvu9ptgjhI7vv8j4S1ImVMfaFnQgGu3feiu8VtXOAdaId0RaYcBk8CDY36FUyFPAwytCjL0ZU53Q91zNb+99WnPq7Q43pueLunG4PYC8sCdP961bmADZda6PCSqK5zqfzTwO1h7T4mZrPaoL+i2fMSldZ3aSaE/ArUMbGW4yxYaynLNlidoaltonuGvQt85r3Vc0vbw/OdriI7OUUDFGmP5vP/9iT64nP9GJT3UbCJXS24SiT2/yUI3XxF6gZzJxvFkxsm66SeDlLpCi+oEfrAhsXFuDgLbUb+6LPk8xjQZRwv/NeXZ8GR+706Ysg9QfVDZ7bbz5jANdB/8/UcSA7ebGcTDNTVDSo22v5imqoPHBqsTlhkLpG6fDZBorg+5890EO6+RTlq5Noj1yp2ax7xH06sUX7i75O3RK1MqopgT7bM7vHvl8aCTMfCyfncBn4cojcUSEaW1NUWUB5pSx9qSAD3i1z8QRDn1LgUqJGQSE0BBwaD2iSvb3sNZjqULt8udblJjDqTu47BLNNlbJqlHBoVpF5Zd+mqGs49PW6mWeDvo1JusbkkCpzhSVaeQ4AtlTUVwl34+3QXj3YYM2TiXk1F7Bin47B7IhBUI2tUIQsyEXuvL/Q5PoH8kaa42D/DOBhx0zCSi2Z4Zr/4KwqBUiRSK4mQXc2W0K/nVty1+IxjJRPa5UPKkOSAA9pSvtWIh0y9hdzcpuA5Grlo9ZjxWiOGKge1cGDT3F7SkKppINP03Ox+bnlmQhcNX8ZjFHG0oqKmzlWTxUS6gEcmNaSQo4wzsVVXDoqMr0Y57QKwFG25Sa878Kcy14Xrar8OqkyixgxBSlhrZk09yOiMFNwODufjuM3jpbO6hI3O+iDtcJZk0eiTfIoAclGffaPFkQBoDTzMoMzkQ3HwS6L6J3xJkYrl7YZrE+rN7sBx+DvfpIQ==';const _IH='c98b3627ec482fa53bf578d49180a6aac7272bd959098e62154c75b3cf2203c6';let _src;

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
