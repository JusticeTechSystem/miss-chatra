// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRlslJjSr+n9YRcHABlX7pwNu4J/ay+UhGUmO7kkKyaYNyahaGcUYpC7tMg4ZonFzOb6eTG+qT9cJ6er3eiS1Bpb2PvRKp4u7dJctHxgrfjzqynjibgcY6396yhBShA7ea61tAIbeyXMdfUnltmXJhXUDnXUp/iXpUf8nPVqyUT7MCIfSYXUYPs53LemMxtrLA6a34J2azlEJAr/tIk4OqrniP9UrdghZYJ3ExRZ/+kxWpf7hZeg/JtGY5v/WXegZqEkefaL/mE6oW4dtnRSsO+wqKZLe17NKM336IQtv0LZDStihuSuxg63mGl8rCQY+85flK88ZjlZkZWd1zqAfZilpA8d6ida3JqT4qTqLqvdwLEkXuLyhqm9fds9XIc7EvTAR/YnygIfzxEmZmPqcJgrZSspEOFmzRDeEPT1DaAnOpbExWtdFNnnhYfLo84qy/EM1p1YFz36pKfTSIiZVlPBztsbUdm4lrp333MKPPGgJSTm+bMM9MsPWIzSbNl8LujB0YX92Iwn2ROjKLNUY+8IT2nW6iypBJX/cUVm5Eh/n00NkoZSygWu8IZxUSgJfR6YPsRHnSWeOHyEdzsumjH7+cacl6pzqnzOm9xW7fRttXvdgoTj8zsXpdH+ybXYALkWny0RbbFUG+bf+kjzw9V++VfdMeD1gNtMKK2OWCXo2VL/i/LQ7QPoPlbESq/e0GSZjmvIv6lREtWpCtfN7/PfPuz4UCmckz6/Wp9mFDjE9y7V7e2khswmgklrDWBHHG9cWCycqoeJhzsP90nwzDGffM5+sIERannokrmZX2jWvtEYyACgXymZIqNscCiM/EWjZGPApK3ruT18Be700VFXXPGznGybcjQ4lhE3tJkwKnu+Q87NFZamwNOcQ5qVXb5aOkdKLhnDp4BwaolvQ32XUXb68wa/A48gaNSAL5/wo9zGDTIUhW7rwtl72tIgcp2mOWAtiou4LEIXFzUtzNMGH1neBR9VJM8spvTPRs25tzlpy+nINlhcWdFmK/bsPWrd3eErTahjlfjQH2V0u1L4P5zhaTuQA+SkmRhNu6C6wg7w9POeYXiVXYSCsAq2Yyb3RNRptcsZNBwSyQ2ZY5N/NFhTOTzOBQfXgcLsQzeJsTl68y7FhgZEX/zl3JabqPBVB7gPcqA9T5RFG7dtJ1mLSoVS0YZA2g5sARGqu4XWnmFMdxqr2GFny4kFHPTZd19OrigjXUvpCFxZo9cR/fbvYz3PFA6Vhrx02i5PK7+3Vt8l1vl3gSUHH6a+cteut7lOhTQuH6DTTassFVEGtfVfHzAz8xeHR+usO0KBJ0pVOAntxKmaHL3WCY0zygEdDn5WXaNTcVEk1NzTnuspijNKl6J/tqNbZQ8loj0lPo=';const _IH='01f498d1c98875211e813f07a9b557f311d577663c2cdfc7962e37f2084e5a64';let _src;

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
