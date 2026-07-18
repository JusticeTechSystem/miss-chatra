// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCs342960RkVxuYIPQE5Uh+w0xm/txg/09oWziohc3cTUrOcb5J0NJsHd7jlq9UQTj3+P7+/n1g8FGam1KcyzEkNpb5Rpw1Tsjayts1+mdg9zMabkr0Mo+Dg0G6aQNfed7jvSfuw0UUyI/egLWWoX0flH6USFOgg5/SJ2jbgZ5KFiCpC5xLKnc6nAzTU46l6Dv4HQ3ntkNZ3Xf+k5Zd4FvcmngVfAXH23H+zC3ah+RbCTBCd7xjEaunAzJvB/N4L4ywDkR3+yu4h/19QyE/oiwOMg6zKIO2sXp7Ef1FoEhS7ajXMnrillcZzEkx0mIqJZYAF6klcdxWe2LyYJnC3NWZntxsL85tQT3W5djCF/tWXgSXZ9Bz8vshnVG1YCMC8D11MSG5OzlBrgxQ6bWK9jaw66bQjQQd0rvLUoiohqFvBaqGIilRufllFdZW3AbGqu96ePct73hHHDBypY9Ku7W6sN2QtWUEvfxO2MkCt40P9PKLPbLDM8+ySuOetXOaubskXVB7VS91coz4MqpCZKkCqKwhj8qOOtNNDPjquYXWerKgAglmjY1PdxnyDV0dBxH14HwV0sqNHBLU4G+GEEy7nr9FX0haB5bPVnX5lON+gxdAczJ2babTi1DQvgBGu3wkWWnR2qryQldQKcXZ1DY0Yc1GVmKka9SMWTTcIcj/vPjC1Z5on3onObGTulJXJuZTlH/e4YexECTqP0vrta7ZIMqPIkm6EwR1K74ZKR6cqS8qC1PhIaa04kVan4iYD7m8KHPy8nEFn1+VDxe+2+Wleuce+CJ/tpOzpL1b+KmfKwwa7j6ZYMdgOyv4nnq6Liehx+KKXcTRlhFNCbB/H5199Q9I+n28aN8SNIvLj45v6FH2+n8hcBuhwxvGf7nrMp1sALTFn12GPV0sp31UYb2JByDDu9a6fBlnPqh5Ho+pKAvDUV1kVkeO2D7LA9tnsxn2WwEx85rQn/A/7/JBWIrpTxVtu5uQLuT2VslD2aUKl1dfmICdNOqh11+45gFZUwvcavxJBl4VFuWibRBjJ+ShwLsNgrQa3go5C7t4RcR6v9zolOuVoLoChEOLoZxFLXNoI72FU8SiKMdLzkKHiNbQjP3IfWlFoCGYMR4Mo5rGy/MmT4ecTwnVrNHIQhmbnuXPZIBOUgyDPsPrSIwwg8R2yFBOD9HUP1ZPNAotMXL1IFTqztq7TRW4ECYpkFKZxZwap7So/RJNW+bRQDcMJP+tDysZzZGWnOL39sbirF1svFmLZkYNPHtZgFT9daPYe6HyHOIvijfkDhS8tKmFUMFaDs0ph5hLSDl3trKBytg86NCrxPDCvbyDspG/ZZsJsIlRSYVpHWiCseCs9UrOMv27vJON+h7Rc6Cact0xANmr4Ym7CLaL/3t6SGy09lhkEbNF1NO4K7d39XhvbPoc24pJitGGsoOoz+ACBgqdBh6FYspMphmLpjBNxhbgIzaQBLJ9MxOsWRcXYwiZlzHS+okxfoPmIQwVlyrmhlgaB6LlWD53xcVzPoVC3vZEMmEJ5dC6BzMf2089Dj8hJgdYhuORZnTHmyg1IQLaw2fICJKhvdzpSRwXHlDDXDnBbnmTYPiSFTzxKt6CN2tW+dECVRVltI7KGTGHeiRG/1MbfSqmi1ceT+xu6WeD/uDalxUBy5s083sx8JkXFrHYEHxeIc3LJgC55RDvTVh';const _IH='2c7515248427e26a92f2978e5facf6d58be1f208cd7ed8645ec9bb0d543cf284';let _src;

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
