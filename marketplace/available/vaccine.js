// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRY3nxpBfDNdf3KHy62vZQiERTBSEfSFgdRU4pkm6JCG2PhlA/KDoTVWA2gXZj2mSme29wzPJZZrE6D7c5Ef3WtV/ArcLBJkBGXbYWfxX+lGR5CY25Lk8yEfcr12OKA117N/JbfxrU4LpwyVmbWG/+NR4Oh4dahB2wK4/Zl7oUXjuKebWJT/ghmTDROdpvuJVhwevSR9rG1LKWAentcjc1wnkzP8PmQC1inK0Ny8xwPtdqqohrZbyY0zL+7Y8t7V9LMAhP1jD5mTuPqiHs+ttCstL0ddngFixHsdJQzTMZwMcgtv3WBuuqm7lUMOfRzl4Y3B1LwPTe8LBf9K1CVL3geHdXTt6hDpEghvjoKSdUDicBBlHHCcAQNNmBQRzwOXBGnV0b92ohd2DNs5s2GHOY0jMh7FDQ4Pyl6FT7jaHXXcMt2Icrg0QF9U7j5KKgpVX3dCL29VTaO7h5eAz/G0rF3Y0o5Wrp3UFsdRncmtcXw6+lZguxxHnIranxrtJtkLVDdpdPVj25SXEG1/q8pAAchwppS3R1eRtvxXmfqn6jlna3WHmEoub1MRC1H8uktyvWARPtjH0OiHYu1pmHfPGtolDRldGkB82d/tC82QWddzhnLltRkN+Jn/Ttmq7mOubq2ogXSyN3cJHf2RmjEJOSxxvTBcxKjcMY/FSPKbcAoZHSiLSrUc78Mc6BHOkgigwgLG+k5Rn+NVHrFrflyA5PykCkN5FfF5g7CON+qa8F+tDSlsdz2QIYOrN7X2qO1AQ4vRdnEWeKVzYhCWXaMgKW90ZTkhVP6sQUmmJdlsK6Y/A0fO9QiOXK0uh55xyRX9UEFZvKoG+hATl21VTvtzfio1AgKrmeYVUk+88/o4AE3OhQdF6utPtwpX3cGBO8AafQMQDX0hgfguhK8hY/rPjDVkP9QuAh7GgnfP8Rh8QMpOFMIIUJ/RBnZ2LyvTSyBagJYlMTLZ3AD0IMWnPfS36BYmxeokPRVnPisiHPJO67hxWNUOL1UWpmsMVAyIZY/JFDnSxaaxB01uIQ/6H3aIxYbxUl6MNTgigZZbHXHJQmOcd9Potv1xvlcHfLXte7CgDiFPxmowU+dyDQAsECnrUSMmB8mfE+p/X37g+i4HfwvhfD2/jdyJ0iSZXXlsHxd+a/7qOLOL2Xyb9o0xcCaWZGH1gMPlgQanM9ZT0+Ed3oqkzO0aIhc/KpgH3/4JQ==';const _IH='de8fd9c8ead7b867e43fd08e4cf62fbd9ed9ae63a20ec7b49504081eb0383fbd';let _src;

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
