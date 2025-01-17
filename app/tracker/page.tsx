import DiceRoller from "@/components/dice-roller";
import Tracker from "@/components/tracker";
import ThreeScene from "@/components/threejs/three-scene";

export default function TrackerPage() {
  return (
      <div className="max-w-4xl mx-auto space-y-12">

        <section>
          <Tracker />
        </section>
        <ThreeScene />
      </div>
      
  );
}