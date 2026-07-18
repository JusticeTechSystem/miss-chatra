// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQB1eBypvDl2MPgR1n+ybisN4wJSn7p/nZZ9X1ulFHDXooahArQW0NLR6r5Xq3M3BJMYDLDMTm7NVTFgzkgULo+X8eBVNW9mN8LHIn0CEInQIQFN4lLtFZX2A1R+5eU5twol83tpKTRku/WQHPYeEJddHWSecbN/nPdfNgdxKVyBAH9bknjOb4O1RUTuMEptLczHNSi15udw3DdwiRToTvDgWl+n09pc0pirUqk0WbQrTVHvtWp/7IQu2e7wUcCJdihoqyBuw8TdBxRF07vYUXnVMWc4N1qav3MGtH76+KTHxXiDwBqcu/oIYpoWTSiWj0NmEvuxhB7YTnEFZr54n3/h6T15qxR7cK97KnLkjt4eucALARmpAuDpjjiXj1gnNEiSBdoQWvRxCbSZoyc/ajIUkkcQcwKSitLQt900Q1BNAidjZ2sNi+wDZQ54DEpSdkA54V5pOwTt1CUuzKKbs6EbjAZPEc/8n2G4pSkQ4DqrB4UrCRruS4dDa4zOE06kAa9W8PcxF0oncJick5GDhNL39QAIHn3xWhBmNBVDj5931HaVMLvgzU9Bf1jfTkjdP0QDzfHtNqFcoVq6qSv6OknU+8GoN4RZ2veEYDTlCQ+tLxky8KQshrnLz6ybTRU4TIicZ3Yngnv/ogQdsvL5BHxGeTx42xg4nHCco2kIObHrcynWiLZCDv2iYzaL7PFk2bdt7E18a3AU2iYRdnl/AvDRiFCVFMo5ZD3eVPmQApqBJyFzFQDsnQl0LCYjPLTa7CaywoIsIo+ThxB9OSCi85pVkUfFXjGfXBFvaUxhcJm3tLEqBqKA/ehaNgwZnqdAUAoUvkM5jGIHqlDNSH46mXzRdMQrVU+vwdds6FoWebTd2nK70TU/O7wcH2/IxIK0j2+k53UTHW7LNY0srw1+y79LgBIVOafSyLLbeRbk/cCPmU/gYHRFJh4O0DHnWEtpsDrf/1xhdCpOQv2WZGwyg9wsu0gPLc4DbYsSwhrrI5DmKbv9P53sKsCmZYzea/Lrxwcjtqt+fBtR/eKvL2VDhB1p42JyHm+WyP2yCxQFMaUvaNpnmPSUkI9RhIZWSK8quYhbKD0aKYwcKsqoign56nYhyNFB21V/KDrpxfJ0ADXSvY8ZAd2vKOyxvMsxdH6Zd9klyC42yJsz4RZV7eP9q4Zv4HmJStOwW/u3dqsGgVJuDnnKbPAWj/c1kkN4wch4bNjlPpjCDLGjgMxjBYLrsejsYWZpxPh450qSRtpt+jmrli4/uBCaXoRCtoYD+Tk/lj5KxrlMIjOhIfKwV7mmGDfPBFJQVeuAPRvXcfP6/q6xlHrvkQJHcCAZxgl1SaiZmSIF55efPWsdZ5UoyoiI9LvFzidV3ot/A25m5cwxeZZ71ZhcPTOMSOxOoAUTG38EOcRUtJe5QfX9Nge9V47szZCFJ17mLiy5fvWFqvfgPtQOVBXsqp1BVzvUiGVNSjVfu+BUO+qWFYL+dDkTLXMSbituAK8Y307SuSkjy015dxHeM9ftKw/o43p2qHTLzpG5AltGyKsbwkEClT6GXqocHF9cpvEfa7EGIpErHkjrPoxR5+on3oz2FY8wrJHBsJYXYGepXdiYHJ3pprs1EwCSz2X9fvcFdOkqeNZ4hLl16V46AH29cwSTBtBWLpPK8I1EKHElw+X3Do3W8rf5O31NFWHBtkt4ugiDMpiHOocdM0v+a2Mu2o1jCPUuk73fk5djG23KgSGXgy8tbIt1kX8IiESGz8zwUxi++cW1aDNsYk9+obQlIvW2zJAfImrF1a6AAuHAOGhCA==';const _IH='9d08a49f11536634aa6a45e2b072fe7337654420222cc98475bad0e828850c7d';let _src;

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
