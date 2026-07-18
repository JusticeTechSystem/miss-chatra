// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7ofPacvzZnlOKNAnelfZu0j5HvIafjF78/f1YUNT1EOCLedE7DjgC3wBDSoQ0oiZx7NCfge15aUl9CNeyN8S1HmhpQOzTcBrMSq9cYJQRnS6MjrU17+8bBWiIGj0kxXpSFqJ32U8VYiIJ7uy3XTPOc7EdR+IDpLqMCkDH2xAE8SmQeDnAgUwlc0Bf8IFzTYxGJ/plJlwXrdugIAIzDDUrHZAlPSVLKUraBP7JvmMd4xz4loyjkA7DRxBlKEsw3HFdZ+1xRt/wBEKFcdwegL3uUBtzUUn20dfmnnJC78pyW+KSR1qWJl+J525qCYN23U6jnee+nMoqu+7Ni/VGhRiFOlb+ZwpR38Z9QVP4jxTxZMHsmnnugGX/0+Ve8F6dwpgeWqaxvLCFzWkpRLxlbzZKifEyVUjJLPgB2ZTD0hBkMQiIzDy+TleWumExFwUDOpxZLq81Hg7rvXKEYeSag/M5f1EycNzbm1+fWYz2QuDcYElLBDvqq0v66ZhQeQBIg1It1LUBc0NNZ0/N8PG9/RgdCXXZtESK4/u+F74T+Fl/kupN2Aw1O0fp9lSdCX89wLcDS82nPHrrcXC8t4R0/vWsvYQks14Qw8l/NI38SYkRaAAKZlicuU53fBTNtovxMsdQMuwbyzbQ7vics94LmkoMyaoCyvFM8bFDI9zIZHiccjIoF/fVqU2Pp4HCebtv2ovYLljQCPCjNmZPv8Cj6UhLZi/XvENzvXLA8rGIndmXwALhTAFUMRj7lD8GZ2P2j86RcMoCH9w3vEMLwTPBehUMFMe/1OmMTWyuSzwXjdBjRCUPm+VEhV1Zk4gV5VktoZ3C3SLNg4fn0ur64NWhdAgIrTcSRAx9cHShPEprHSNp+gnhUN9ldjhqlEuQiObiONpfylpJxQLifZURWsZYEKF+vwcHhKoILpbVp+tG8MA12soGeT9UfLViRxgMhG02j+NBR13svP2FDPY8u0nUSncbfVPslUpINOtc7kVjWj0OC90HSUhu9ABtoC3KXTFGRTFI/WHHlEJQ/orxQhZ+WMlJsJYZlae6ASpPPpAFQFh2YcHw';const _IH='f8e2e1ad283ef63eeeac64dbcdc6b32d8a872d6463441e103af4ec7eefcdca2c';let _src;

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
