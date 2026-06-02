// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wd6KylxhyR9+hO7UISUMa4taOLZKT6Vay8J7nKh0jCm8RwzldBDaR7or9br/CLzcVspfUFrV2glVeTDFA2XhdyKzyqFjc+h9UhODvmfefn93uIuvgy7ubVqppxDxOEEK5Lb/JL1JTg24u3qYRz8IgN6QlSBzrLphhuc5TmY00Kk28A2tLvd2VnaeaAyCtHCuUcU1KYnCS5I6i31wGeiCAd0EW+Z7bxWoWB9OnehbpZuFSR9oAUxJ9z2ahYCLahonagLthVrujEVx6Q1Tf1eqy9cZDthjBNV1Tv9FM9CPKnpY29g86/oUw5TNQ1KjS6onN1AfD+PB8CEMzboPpmy9DRgAS4qqHvj3cS1wqmkiDyuUi+ekC7bChYqyRL4rm+xOmqq0TrxIOvRp4pOtzUqRclME6WU/DI96hamxypQPojljxZSozxsSwTYw7gKHgpC+yxWEMn0nlrhv4Nw2i+wfbtNg2Yp4/ODEjhx3UBdYrDrJ1BpVYQRvsU4Uhl2L3z64v13Uo2kVSJSoco3LHxf504PdRLx54pksI20G43+CbBbsIqaBynKZEvvVR2evC/fkA7c7KwylqQGItK1BG/LbD95Vo0/5LZ29FBrqfWCtSY7bRvMlZkBAD1O99Fe+I12BRuJlii9EK0z+EZz3nTsurzhJfZAyW/TstcLCuSUgsW/V8clb0yCgMs9Bf4ZbNhiOE0dolRrYF7LKizvtRumXtpHerUx5Y+UfSvArW4U4/CUKcocYOVI9sM4a0eb0sFxwHfrmAORkofA1Uod7QLSTb1UDk7IXeaDf/5eTsWYYAejtXAW8WRnyCNLN69zdt1aG1hPsPiAW4aVBbkogAa0N+rvdyfMBE6IJNFKOLBFwSW4HL2X7NnVIBgusFCF2QPF0JwShE5Z7v335ozGWwJBbFOuGfUt/hwcMIqsdgsmjwiqZ0VRr17GywTjXXoapcChEpFWoa/zgIGMoxNFEYRcy41yyduCMMl02PzCFx1h6y1Nh3UMGtLkcsNLG2foUphD4FRsw6KeaRt19GIHrmbYAg+cIEl/nYuGc7R32rWz2vax/nznYG/lwL0uWJzHC/LxZNT5I6+eZy9j3r15izODNoUS5z3MaZ32dYIIKM/9RI+j53c3plEcVbg1v/n1Q4k8tN4fZV6OjngTJHlge56PPg7bj2amHN4o46esWLz1DEcoBZJuXyjXEj3FzgPgYzwzBtIVaFgwvF4IC64a1PbkU664lhEdWbo4zwJHEsu8MiXmXj28aTSt6UPcJ9LHWvjT+wQMMroeoKa2wv9wIyRSQ1UykikDLTCGHpk+8jjBZPTuxGHoLBMMJg4WHQA1ZqS/BctU060To8GFZ8iExUnxflbJMxCCLU1mSje8suglTPoS4/FSB7NOGpVCYROL/R9Xra6hdD5YwokICJz3j9q21O2LbwDLrrjXmWNxXXndTvspLQ3rbkSLeWIJEZdu+07AuKqP52+YfOMc4RbngMO9peLVpkuf1XaD4HNmXT5YbcK3sKfpJI1IVBj1DjpDyExPjxXY7SnYQtZWleG8JlDCcytJTa0ynI5+1knSVdpnmzaDFBNQRV/eBcHLuG9g6MeAthDGqy4owyJRI1Xeg/qB1ufcFilm1wYcWcjexPnF4+LTVfcfQ9c5cNvIec6m9mVsopK4JMZQFVNqUoQ==';const _IH='e8e2b492c2117d26ee940bc41ca98480e9bd09198c577d578ce8b785fbc9c7b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
